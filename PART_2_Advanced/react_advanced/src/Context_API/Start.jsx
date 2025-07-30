import React, { useState, createContext } from "react";
import Nav from "./Nav"; // importing Nav component

const Main = () => {
  const [user, setUser] = useState("John Doe"); // state variable to hold the user name

  const handleLogout = () => {
    setUser(""); // setting the user name to empty string on logout
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Nav /> {/* Nav component will consume the context value */}
      <h1 className="mt-3">Welcome to the Context API Example</h1>
    </div>
  );
};
export default Main;
