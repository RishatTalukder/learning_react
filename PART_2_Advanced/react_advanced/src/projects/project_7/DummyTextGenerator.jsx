import React, { useState } from "react";
import generateDummyText from "./generateDummyText"; // importing the generateDummyText function

const DummyTextGenerator = () => {
  const [dummyText, setDummyText] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false); // creating a state variable to hold the invalid state

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = new FormData(event.currentTarget);
    const rawData = Object.fromEntries(formValues.entries());

    const newData = {};
    Object.keys(rawData).forEach((key) => {
      newData[key] = parseInt(rawData[key], 10);
    });

    if (newData.paragraphs <= 0 || newData.words <= 0) {
      setIsInvalid(true); // setting the invalid state to true if the input values are invalid
      return;
    }

    setIsInvalid(false); // setting the invalid state to false if the input values are valid

    const paragraphs = newData.paragraphs || 1;
    const words = newData.words || 5;

    setDummyText(generateDummyText(paragraphs, words)); // generating the dummy text based on the input values
  };

  return (
    <div>
      <h1>Dummy Text Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="paragraphs" className="form-label">
            Number of Paragraphs
          </label>
          <input
            type="number"
            className={`form-control ${isInvalid ? "is-invalid" : ""}`}
            id="paragraphs"
            name="paragraphs"
            placeholder="Enter number of paragraphs"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="words" className="form-label">
            Number of Words
          </label>
          <input
            type="number"
            className={`form-control ${isInvalid ? "is-invalid" : ""}`}
            id="words"
            name="words"
            placeholder="Enter number of words per paragraph"
          />
          {isInvalid && (
            <div className="invalid-feedback">Please enter valid numbers.</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Generate Text
        </button>
      </form>
      {dummyText.length > 0 && (
        <div className="mt-4">
          <h2>Generated Dummy Text:</h2>
          {dummyText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default DummyTextGenerator;