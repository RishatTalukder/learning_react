import React, { useEffect, useState } from "react";
import axios from "axios";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([...dummyData]);
  const [error, setError] = useState(null);

  const loadUsers = () => {
    setIsLoading(true);
    setError(null); // Reset error state when loading starts
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        const usersData = response.data.map((user) => ({
          id: user.id,
          name: user.login,
          email: user.html_url,
          image: user.avatar_url,
        }));
        console.log(response);
        
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      getUsers();
    }
  }, [isLoading]);

  if (error) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="text-center text-primary display-1">Users List</h1>
        <div className="d-flex flex-column align-items-center gap-3 mt-5">
          {users.map((user) => (
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
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h1 className="text-center text-primary display-1">Users List</h1>
      <div className="d-flex flex-column align-items-center gap-3 mt-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="card d-flex flex-row justify-content-between align-items-center gap-3 p-3 shadow-sm w-100"
          >
            <img
              src={user.image || av}
              alt="avatar"
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="d-flex flex-column">
              <h5 className="text-primary">{user.name}</h5>
              <p className="text-secondary">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={loadUsers} className="btn btn-primary mt-3">
        Load Users
      </button>
    </div>
  );
};

export default Users;
