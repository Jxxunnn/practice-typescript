import React, { useState, useRef } from "react";

interface PropsType {
  id: number;
  author: string;
  content: string;
  emotion: string;
  created_date: number;
  onRemove: (targetId: number) => void;
  onEdit: (targetId: number, newContent: string) => void;
}

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
  onEdit,
}: PropsType) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef<HTMLTextAreaElement>(null);

  const toggleIsEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const handleRemove = () => {
    onRemove(id);
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current?.focus();
      return;
    }
    onEdit(id, localContent);
    setIsEdit(false);
  };

  return (
    <li className="DiaryItem">
      <p className="info">
        <span>작성자 : {author}</span>
        {" | "}
        <span>감정점수 : {emotion}</span>
        <br />
        <time className="date">
          작성 시간(ms) : {new Date(created_date).toLocaleString()}
        </time>
      </p>

      {isEdit ? (
        <>
          <textarea
            value={localContent}
            style={{ display: "block" }}
            ref={localContentInput}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        </>
      ) : (
        <p className="content">일기 : {content}</p>
      )}
      {isEdit ? (
        <>
          <button type="button" onClick={handleEdit}>
            수정완료
          </button>
          <button type="button" onClick={handleQuitEdit}>
            수정취소
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={handleRemove}>
            삭제하기
          </button>
          <button type="button" onClick={toggleIsEdit}>
            수정하기
          </button>
        </>
      )}
    </li>
  );
};

export default DiaryItem;
