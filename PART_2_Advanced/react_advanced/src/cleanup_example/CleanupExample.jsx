import React, { useState, useEffect } from "react";

const CleanupExample = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Cleanup Example</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setToggle(!toggle)} // toggling the state
      >
        Toggle
      </button>
      <div>
      Toggle: {toggle && <Hello />}

      </div>
    </div>
  );
};

const Hello = () => {
  useEffect(() => {
    console.log("Hello component mounted");
    const intervalId = setInterval(() => {
      console.log("Hello component is still mounted");
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Hello component unmounted");
    }; // cleanup function to clear the interval
  }, []);

  return <h2>Hello</h2>;
};
export default CleanupExample;
