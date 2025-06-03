import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState(""); // creating a state variable for the name input field
  const [email, setEmail] = useState(""); // creating a state variable for the email input field
  const [submitted, setSubmitted] = useState(false); // creating a state variable to check if the form is submitted

  const handleSubmit = (event) => {
    event.preventDefault(); // preventing the default behavior of the form submission
    setSubmitted(true); // setting the submitted state to true
  };

  return (
    <div>
      <h1>Controlled Inputs</h1>
      {submitted && <h2>Welcome, {name}!</h2>} {/* displaying the welcome message if the form is submitted */}
      <form onSubmit={handleSubmit}> {/* adding onSubmit event to the form */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name} // setting the value attribute to the state variable
            onChange={(event) => setName(event.target.value)} // updating the state variable with the value of the input field
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email} // setting the value attribute to the state variable
            onChange={(event) => setEmail(event.target.value)} // updating the state variable with the value of the input field
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;