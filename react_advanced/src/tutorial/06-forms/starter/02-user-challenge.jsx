import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setUsers((prev) => [...prev, name]);
      setName("");
    }
    console.log(users);
  };

  return (
    <div>
      <form
        className="border border-2 border-primary bg-secondary p-5 rounded-5 d-flex justify-content-center align-items-center flex-column"
        onSubmit={handleSubmit}
      >
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label mt-3">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block btn-primary mt-3 mb-3">
          submit
        </button>
      </form>

      <div className="mt-3">
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="border border-2 border-primary bg-secondary p-3 rounded-5 d-flex justify-content-between align-items-center flex-row mt-3"
            >
              <div
              className="container "
              >
              {user}
              </div>
              
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setUsers((prev) => prev.filter((_, i) => i !== index));
                  }}
                >
                  remove
                </button>
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserChallenge;
