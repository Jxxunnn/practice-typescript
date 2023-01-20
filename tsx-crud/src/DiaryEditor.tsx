import React, { useState, useRef, ChangeEvent, FormEvent } from "react";

interface PropsType {
  onCreate: (author: string, content: string, emotion: string) => void;
}

const DiaryEditor = ({ onCreate }: PropsType) => {
  const authorInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);
  const [state, setState] = useState({ author: "", content: "", emotion: "1" });

  const handleChangeState = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    if (state.author.length < 1) {
      authorInput.current?.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current?.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    setState({ author: "", content: "", emotion: "1" });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
