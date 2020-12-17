import React from "react";
import Profile from "../components/Profile";

const Dashboard = () => {
  return (
    <div>
      <button className="nes-btn is-primary is-dark">Stripe</button>
      <h1>Dashboard</h1>
      <Profile />
    </div>
  );
};

export default Dashboard;
