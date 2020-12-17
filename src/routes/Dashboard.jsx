import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import axios from "axios";

const Dashboard = state => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    setUserInfo(state.location.state);
  }, []);

  const stripeUserCheck = () => {
    axios.get(`/users/${userInfo.id}`).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <button
        className="nes-btn is-primary is-dark"
        onClick={() => stripeUserCheck()}
      >
        Stripe
      </button>
      <h1>Dashboard {userInfo && "for " + userInfo.first_name}</h1>
      <Profile />
    </div>
  );
};

export default Dashboard;
