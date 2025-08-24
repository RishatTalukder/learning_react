import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootSharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootSharedLayout;
