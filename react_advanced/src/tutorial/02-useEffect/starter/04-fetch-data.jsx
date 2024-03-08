//import useState and useEffect
import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      console.log(users);
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        const { id, login, avatar_url } = user;
        return (
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            key={id}
          >
            <img src={avatar_url} alt={login} style={{ width: "100px" }} />
            <h4>{login}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
