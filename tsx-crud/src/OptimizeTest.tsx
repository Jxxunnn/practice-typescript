import React, { useState, useEffect } from "react";

/* const TextView = React.memo(({ text }: { text: string }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });

  return <div>{text}</div>;
});

const CountView = React.memo(({ count }: { count: number }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  });
  return <div>{count}</div>;
}); */

const CounterA = React.memo(({ count }: { count: number }) => {
  useEffect(() => {
    console.log(`Counter A Update - count: ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj: { count } }: { obj: { count: number } }) => {
  useEffect(() => {
    console.log(`Counter B Update - count: ${count}`);
  });
  return <div>{count}</div>;
};

const areEqual = (
  prevProps: {
    obj: { count: number };
  },
  nextProps: {
    obj: { count: number };
  }
) => {
  return prevProps.obj.count === nextProps.obj.count ? true : false;
};

const MemoizedCounterC = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });
  //  const [text, setText] = useState("");
  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h2>Count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>Count B</h2>
        <MemoizedCounterC obj={obj} />
        {/* <CounterB obj={obj} /> */}
        <button onClick={() => setObj({ count: obj.count })}>+</button>
      </div>
      {/*  <div>
        <h2>count</h2>
        <CountView count={count} />
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div> */}
    </div>
  );
};

export default OptimizeTest;
