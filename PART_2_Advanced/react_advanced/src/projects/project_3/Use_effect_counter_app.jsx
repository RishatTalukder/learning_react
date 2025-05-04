import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // counter variable

  const increase = () => {
    setCount((prevState) => prevState + 1); // function to increase the counter
  };

  useEffect(() => {
    console.log("Counter updated"); // this will run every time the component is re-rendered
    increase();
  },[]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1
        className="text-center
      display-1
      "
      >
        {count}
      </h1>

      <div className="mt-1">
        <button className="btn btn-primary mx-2" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
