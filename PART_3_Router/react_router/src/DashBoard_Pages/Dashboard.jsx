import React from "react";
const Dashboard = ({user}) => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard! {user}</p>
    </div>
  );
};
export default Dashboard;