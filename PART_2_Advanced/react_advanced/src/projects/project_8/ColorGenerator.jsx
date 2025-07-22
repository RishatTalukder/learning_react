import React, { useState, useEffect } from "react";
import Values from "values.js"; // importing the Values class from the values.js library
import ColorBox from "./ColorBox";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(
    new Values("#ff5733").all()
  ); // initializing with a default color
  const [isInvalid, setIsInvalid] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const values = new Values(color).all();
      setColors(values);
      setIsInvalid(false);
    } catch (error) {
      setIsInvalid(true);
      setColors([]);
    }
  };
  return (
    <div>
      <h1>Color Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-end mb-3">
          <div className="me-2" style={{ width: "250px" }}>
            <label htmlFor="color" className="form-label">
              Enter Hexadecimal Color Code
            </label>
            <input
              type="text"
              className={`form-control ${isInvalid ? "is-invalid" : ""}`}
              id="color"
              name="color"
              placeholder="#ff5733"
              value={color}
              onChange={(e) => setColor(e.target.value)} // controlled input
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Generate Colors
          </button>
        </div>
      </form>
      {isInvalid && (
        <div className="invalid-feedback d-block">
          Please enter a valid color code.
        </div>
      )}

      {colors.length > 0 && (
        <div className="row">
          {colors.map((colorObj, index) => (
            <ColorBox
              key={index}
              hex={colorObj.hex}
              weight={colorObj.weight}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default ColorGenerator;