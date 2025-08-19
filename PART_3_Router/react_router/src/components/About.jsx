import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page!</p>
      <Link to="profile">Profile</Link> {/* Link to the Profile page */}
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};
export default About;