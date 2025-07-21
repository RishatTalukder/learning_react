import React from "react";

const ColorBox = ({ hex, weight, index}) => {
  const textColor = index > 10 ? "text-white" : "text-dark"; // setting the text color based on the index
  return (
    <div className="col-2 p-0">
      <div
        className="position-relative w-100"
        style={{
          backgroundColor: `#${hex}`,
          paddingTop: "100%", // Square box
        }}
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

        {/* Weight: Center */}
        <div
          className={`position-absolute top-50 start-50 translate-middle fw-bold ${textColor}`}
          style={{
            fontSize: "14px",
          }}
        >
          {weight}%
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
