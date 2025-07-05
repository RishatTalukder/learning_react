import React, { useState } from "react";

const CheckboxAndSelect = () => {
  const [isSubscribed, setIsSubscribed] = useState(false); // creating a state variable to hold the value of the checkbox input
  const [selectedCountry, setSelectedCountry] = useState(""); // creating a state variable to hold the value of the select input

  const handleCheckboxChange = (event) => {
    setIsSubscribed(event.target.checked); // updating the state variable with the value of the checkbox input
    console.log(event);
    
  };

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value); // updating the state variable with the value of the select input
  };

  return (
    <div>
      <h1>Checkbox and Select Inputs</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="subscribe" className="form-label">
            Subscribe to Newsletter
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="subscribe"
            checked={isSubscribed} // setting the checked attribute to the state variable
            onChange={handleCheckboxChange} // adding the onChange event to the checkbox input
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Select Country
          </label>
          <select
            className="form-select"
            id="country"
            value={selectedCountry} // setting the value attribute to the state variable
            onChange={handleSelectChange} // adding the onChange event to the select input
          >
            <option>Select a country</option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CheckboxAndSelect;