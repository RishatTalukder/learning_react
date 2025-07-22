import React, { useState, useEffect } from "react";

const ColorBox = ({ hex, weight, index }) => {
  const textColor = index > 10 ? "text-white" : "text-dark"; // setting the text color based on the index

  const [isCopied, setIsCopied] = useState(false); // creating a state variable to hold the copied state

  const handleClick = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setIsCopied(true); // setting the copied state to true
  }

  useEffect(() => {
    let timer;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false); // resetting the copied state after 2 seconds
      }, 2000);
    }
    return () => clearTimeout(timer); // clearing the timer on unmount
  }, [isCopied]);

  return (
    <div className="col-2 p-0">
      <div
        className="position-relative w-100"
        style={{
          backgroundColor: `#${hex}`,
          paddingTop: "100%", // Square box
        }}
        onClick={handleClick} // adding the click event handler
      >
        {/* Hex Code: Top Left */}
        <div
          className="position-absolute top-0 start-0 text-white fw-semibold px-1"
          style={{
            fontSize: "10px",
            textShadow: "1px 1px rgb(0,0,0)",
          }}
        >
          #{hex}
        </div>

        <div
          className={`position-absolute top-50 start-50 translate-middle fw-bold ${textColor}`}
          style={{
            fontSize: "14px",
          }}
        >
          {weight}%
        </div>

        {isCopied && (
          <div className={`position-absolute bottom-0 start-50 translate-middle-x ${textColor} p-1 rounded fw-semibold`}>
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};
export default ColorBox;