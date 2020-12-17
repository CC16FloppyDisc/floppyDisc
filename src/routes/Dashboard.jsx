import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import axios from "axios";

const Dashboard = state => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    setUserInfo(state.location.state);
  }, []);

  const createUser = async () => {
    const link = await axios.post("/api/createuser").then(res => res.data);
    if (link) {
      window.open(link.url);
      axios
        .patch(`/users/${userInfo.id}`, { stripe_id: link.id })
        .then(res => res.data);
    }
    return;
  };

  const stripeUserCheck = () => {
    axios.get(`/users/${userInfo.id}`).then(res => {
      res.data[0].stripe_id.length === 0
        ? createUser()
        : console.log("user has stripe Id");
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
