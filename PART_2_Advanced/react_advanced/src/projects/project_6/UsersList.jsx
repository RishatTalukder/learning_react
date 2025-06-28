import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim()) {
      const newUser = {
        id: Date.now(),
        name: user.trim(),
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setUser("");
    }
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Users List</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-4 d-flex flex-column align-items-center">
        {users.length > 0 ? (
          users.map((userObj) => (
            <div key={userObj.id} className="card w-50 text-center mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{userObj.name}</h5>
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDelete(userObj.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No users found</p>
        )}
      </div>
    </div>
  );
};

export default UsersList;
