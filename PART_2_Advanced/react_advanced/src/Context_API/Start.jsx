import React, { useState, createContext } from "react";
import Nav from "./Nav"; // importing Nav component

const Main = () => {

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Nav /> {/* Nav component will consume the context value */}
      <h1 className="mt-3">Welcome to the Context API Example</h1>
    </div>
  );
};
export default Main;
