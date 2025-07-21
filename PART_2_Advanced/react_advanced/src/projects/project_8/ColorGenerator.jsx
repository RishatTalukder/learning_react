import React, { useState } from "react";
import Values from "values.js"; // importing the Values class from the values.js library
import ColorBox from "./ColorBox";

const ColorGenerator = () => {
  const [color, setColor] = useState(""); // creating a state variable to hold the color code
  const [colors, setColors] = useState([]); // creating a state variable to hold the generated colors
  const [isInvalid, setIsInvalid] = useState(false); // creating a state variable to hold the invalid state

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const values = new Values(color).all(); // generating colors based on the input value
      setColors(values); // updating the state variable with the generated colors
      setIsInvalid(false); // setting the invalid state to false if the input value is valid
    } catch (error) {
      setIsInvalid(true); // setting the invalid state to true if the input value is invalid
      setColors([]); // clearing the colors array if the input value is invalid
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
              hex={colorObj.hex} // passing the hex property separately
              {...colorObj} // passing the rest of the properties
              index={index} // passing the index for key prop
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default ColorGenerator;
