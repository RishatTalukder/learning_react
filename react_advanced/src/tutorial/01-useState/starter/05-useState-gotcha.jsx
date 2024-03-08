import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(1);
  const handleCount = (event) => {
    if (event.target.textContent === "Increase") {
      setValue((prevValue) => prevValue + 1);
    } else {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{value}</h1>
      <div>
        <button className="btn btn-primary" onClick={handleCount}>
          Increase
        </button>
        {/* decrease button */}
        <button className="btn btn-danger" onClick={handleCount}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseStateGotcha;
