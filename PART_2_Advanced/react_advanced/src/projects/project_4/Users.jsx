import React, { useState } from "react";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  const [loading, setLoading] = useState(false); // loading state variable
  const [users, setUsers] = useState([...dummyData]); // users state variable

  const loadUsers = () => {
    setLoading(true); 
  } // function to load the users

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <div className="d-flex flex-column align-items-center gap-3 mt-5">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="card d-flex flex-row justify-content-between align-items-center gap-3 p-3 shadow-sm w-100"
              >
                <img
                  src={user.image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="d-flex flex-column">
                  <h5 className="text-primary">{user.name}</h5>
                  <p className="text-secondary">{user.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  else {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <button
          onClick={loadUsers}
          className="btn btn-primary mt-3"
        >
          Load Users
        </button>
      </div>
    );
  }
};

export default Users;
