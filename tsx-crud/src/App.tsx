import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

type onCreateType = (author: string, content: string, emotion: string) => void;
interface Diarytype {
  id: number;
  author: string;
  content: string;
  emotion: string;
  created_date: number;
}

function App() {
  const [data, setData] = useState<Diarytype[]>([]);

  const dataId = useRef(0);

  const onCreate: onCreateType = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      content,
      emotion,
      created_date,
    };
    dataId.current += 1;
    setData((prev) => [{ ...newItem }, ...prev]);
  };

  const onRemove = (targetId: number) => {
    setData((prev) => [...prev.filter((it, id) => it.id !== targetId)]);
  };

  const onEdit = (targetId: number, newContent: string) => {
    setData((prev) => [
      ...prev.map((it) => {
        if (it.id === targetId) {
          return { ...it, content: newContent };
        } else return it;
      }),
    ]);
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
