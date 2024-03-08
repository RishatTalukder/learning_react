import { useState } from "react";

const ErrorExample = () => {

  const handleClick = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState(0); 

  return (
    <div
    className="d-flex justify-content-center align-items-center flex-column" style={{
      height: "80vh",
    }}
    >
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn btn-primary">
        shit
      </button>
    </div>
  );
};

export default ErrorExample;
