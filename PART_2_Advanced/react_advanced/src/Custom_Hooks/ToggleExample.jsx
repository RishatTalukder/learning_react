import React from "react";
import useToggle from "./hooks/useToggle"; // importing the custom hook

const ToggleExample = () => {
  const [toggle, toggleValue] = useToggle(false); // using the custom hook

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="bg-light p-3 rounded shadow" style={{ width: "300px" }}>
        <h2 className="text-center">Toggle Example</h2>
        <button className="btn btn-primary w-100" onClick={toggleValue}>
          {toggle ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};
export default ToggleExample;