import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

type onCreateType = (author: string, content: string, emotion: string) => void;
interface Diarytype {
  id: number;
  author: string;
  content: string;
  emotion: string;
  created_date: number;
}
interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function App() {
  const [data, setData] = useState<Diarytype[]>([]);

  const dataId = useRef(0);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const json: CommentType[] = await res.json();
      const initData = json.slice(0, 20).map((it) => {
        return {
          author: it.email,
          content: it.body,
          emotion: String(Math.floor(Math.random() * 5) + 1),
          created_date: new Date().getTime(),
          id: dataId.current++,
        };
      });
      setData(initData);
    };
    getData();
  }, []);

  const onCreate: onCreateType = useCallback((author, content, emotion) => {
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
  }, []);

  const onRemove = useCallback((targetId: number) => {
    setData((prev) => [...prev.filter((it, id) => it.id !== targetId)]);
  }, []);

  const onEdit = useCallback((targetId: number, newContent: string) => {
    setData((prev) => [
      ...prev.map((it) => {
        if (it.id === targetId) {
          return { ...it, content: newContent };
        } else return it;
      }),
    ]);
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => +it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return [goodCount, badCount, goodRatio];
  }, [data.length]);

  const [goodCount, badCount, goodRatio] = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
