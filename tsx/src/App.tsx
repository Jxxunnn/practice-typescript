import React, {useState} from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState<string | number>("kim")

  const 박스 :JSX.Element = <div></div>
  return (
    <div className="App">
    <h3>안녕하세여</h3>
    {박스}
    <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props : {name:string, age: string}) :JSX.Element {
  return <div>{props.name}프로필입니다.</div>
}

export default App;
