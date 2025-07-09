import React from "react";
import { useState } from "react";

const UncontrolledInputs = () => {
  const [formValues, setFormValues] = useState({}); // creating a state variable to hold the form values

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    const formData = new FormData(event.currentTarget); // create a FormData object from the form
    const values = Object.fromEntries(formData.entries()); // convert the FormData object to a regular JavaScript object

    console.log(values); // logging the form values in the console
    setFormValues(values); // updating the state variable with the form values
  };
  return (
    <div>
      <h1>Uncontrolled Inputs</h1>
      <form
        onSubmit={handleSubmit} // handle the form submission
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
            name="firstName" // adding the name attribute to the input field
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter your last name"
            name="lastName" // adding the name attribute to the input field
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            name="email" // adding the name attribute to the input field
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            name="password" // adding the name attribute to the input field
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
