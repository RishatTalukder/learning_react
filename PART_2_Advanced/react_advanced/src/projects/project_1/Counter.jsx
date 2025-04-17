import React, { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(()=>{
      setCount(count + 1);
    },3000)
    console.log(count);
  };
  const decrease = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      }
      return prevCount - 1;
    });
    console.log(count);
  };
  const reset = () => {
    setCount(0);
    console.log(count);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center text-primary
      display-1
      "
      >
        {count}
      </h1>
      <div className="mt-1">
        <button className="btn btn-danger mx-2" onClick={decrease}>
          decrease
        </button>
        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>
      <button className="btn btn-secondary mt-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
