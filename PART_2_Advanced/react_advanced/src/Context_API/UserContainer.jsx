import React from "react";
import { useGlobalContext } from "../GlobalContextProvider";

const UserContainer = () => {
  const { user, handleLogout } = useGlobalContext()

  return (
    <div className="d-flex align-items-center">
      {user ? ( // checking if the user is logged in
        <>
          <span className="me-3">{user}</span>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <span className="text-muted">No user logged in</span> // showing a message if no user is logged in
      )}
    </div>
  );
};
export default UserContainer;