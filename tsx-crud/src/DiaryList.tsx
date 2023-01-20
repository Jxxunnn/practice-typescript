import React from "react";
import DiaryItem from "./DiaryItem";

interface PropsType {
  diaryList: {
    id: number;
    author: string;
    content: string;
    emotion: string;
    created_date: number;
  }[];
  onRemove: (targetId: number) => void;
  onEdit: (targetId: number, newContent: string) => void;
}

const DiaryList = ({ diaryList, onRemove, onEdit }: PropsType) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <ul>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
