import React, { useRef, useState } from "react";

const InputRef = () => {
  const firstNameRef = useRef(null); // creating a ref for the firstName input field
  const lastNameRef = useRef(null); // creating a ref for the lastName input field
  const [formValues, setFormValues] = useState({}); // creating a state variable to hold the form values

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    const values = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };
    setFormValues(values); // updating the state variable with the form values
    console.log(values); // logging the form values in the console

    // Clearing the input fields after submission
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };

  return (
    <div>
      <h1>Input Ref</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
            ref={firstNameRef} // adding the ref attribute to the input field
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
            ref={lastNameRef} // adding the ref attribute to the input field
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default InputRef;