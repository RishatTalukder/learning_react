import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ user, children }) => {
  if (user !== "admin") {
    // Check if the user is not admin
    return <Navigate to="/" />; // Redirect to Login page
  }
  return children; // Render the children components if the user is admin
};
export default ProtectedRoute;