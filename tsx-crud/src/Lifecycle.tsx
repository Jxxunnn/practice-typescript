import React, { useState, useEffect } from "react";

const UnmountTest = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={toggle}>버튼</button>
      {isVisible ? <UnmountTest /> : null}
    </div>
  );
};

export default Lifecycle;
