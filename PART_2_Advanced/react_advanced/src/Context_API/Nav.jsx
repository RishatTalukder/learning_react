import React from "react";
import UserContainer from "./UserContainer";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light w-100">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Context API Example</span>
        <UserContainer /> {/* UserContainer will consume the context value */}
      </div>
    </nav>
  );
};
export default Nav;