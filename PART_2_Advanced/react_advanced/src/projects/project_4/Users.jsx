import React, { useEffect, useState } from "react";
import axios from "axios";
import dummyData from "./dummyData"; // importing the dummy data
import av from "./av.svg"; // importing the svg avatar

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchUsers = async () => {
    // adding the async keyword
    const url = "https://api.github.com/users="; // API link
    try {
      const result = await axios.get(url); // sending a GET request to the API
      const data = result.data.map((user) => {
        // mapping the data to get only the information we need
        return {
          id: user.id,
          name: user.login,
          email: user.html_url,
          image: user.avatar_url,
        };
      });
      setUsers(data); // setting the users state variable to the new array of objects
      console.log(data); // logging the data to the console
    } catch (error) {
      
      setIsError(true); // setting the isError state variable to true
      console.log(error); // logging the error to the console
    }
  }; // function to fetch the users

  const loadUsers = () => {
    setLoading(true);
    // fetchUsers(); // calling the fetchUsers function
  }; // function to load the users

  useEffect(()=>{
    if (loading) {
      fetchUsers(); // calling the fetchUsers function
    }
  },[loading])


  if (isError) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="text-danger">Error</h1>
        <p className="text-secondary">Something went wrong</p>
      </div>
    );
  } // checking if there is an error
  // if there is an error, return the error message

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h1 className="text-center text-primary display-1">Users List</h1>

      {loading ? ( // using the ternary operator to check the loading state
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
      ) : (
        <button onClick={loadUsers} className="btn btn-primary mt-3">
          Load Users
        </button>
      )}
      
    </div>
  );
};

export default Users;
