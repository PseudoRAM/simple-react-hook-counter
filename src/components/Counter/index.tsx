import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
