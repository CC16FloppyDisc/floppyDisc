import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { useHistory } from "react-router-dom";

import axios from "axios";

const Dashboard = state => {
  const history = useHistory();
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

  const stripeSignIn = async stripe_id => {
    console.log(stripe_id);
    const link = await axios
      .post("/stripesignin", { stripe_id })
      .then(res => res.data);
    if (link) {
      window.open(link.url);
    }
    return;
  };

  const stripeUserCheck = () => {
    axios.get(`/users/${userInfo.id}`).then(res => {
      res.data[0].stripe_id.length === 0
        ? createUser()
        : stripeSignIn(res.data[0].stripe_id);
    });
  };

  return (
    // <div>
    //   <button
    //     className="nes-btn is-primary is-dark"
    //     onClick={() => stripeUserCheck()}
    //   >
    //     Stripe
    //   </button>
    //   <h1>Dashboard {userInfo && "for " + userInfo.first_name}</h1>
    //   <Profile userInfo={userInfo} />
    // </div>

    <div>
      <div className="login-wrapper">
        <button
          onClick={() => stripeUserCheck()}
          type="button"
          className="nes-btn is-primary is-dark"
          id="stripe-btn"
        >
          Stripe
        </button>
        <h1>Dashboard</h1>
        <button
          onClick={() => history.push("/")}
          type="button"
          className="nes-btn is-primary is-dark home-btn"
        >
          Home
        </button>
      </div>
      <Profile userInfo={userInfo} />
    </div>
  );
};

export default Dashboard;
