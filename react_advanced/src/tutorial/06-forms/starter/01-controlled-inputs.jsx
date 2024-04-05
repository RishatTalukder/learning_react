import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form
        action=""
        className="border border-2 border-primary bg-secondary p-5 rounded-5"
        onSubmit={
          (e) => {
            e.preventDefault();
            console.log(name, email);
          }
        }
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          add person
        </button>
      </form>
    </div>
  );
};
export default ControlledInputs;
