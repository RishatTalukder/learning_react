import React, { useState } from "react";

const CheckboxAndSelect = () => {
  const [formData, setFormData] = useState({
    isSubscribed: false,
    selectedCountry: "",
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // updating the formData object with the value of the input field that triggered the event
    });
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
            name="isSubscribed" // setting the name attribute to isSubscribed
            checked={formData.isSubscribed} // setting the checked attribute to the state variable
            onChange={handleChange} // adding the onChange event to the checkbox input
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Select Country
          </label>
          <select
            className="form-select"
            id="country"
            name="selectedCountry" // setting the name attribute to selectedCountry
            value={formData.selectedCountry} // setting the value attribute to the state variable
            onChange={handleChange} // adding the onChange event to the select input
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