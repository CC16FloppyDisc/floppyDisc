import React, { useState } from "react";
import AddGame from "./AddGame";
import axios from "axios";

const Profile = ({ userInfo }) => {
  const [inputState, setInputState] = useState(false);
  const [stripeId, setStripeId] = useState();

  const handleInputState = () => {
    setInputState(state => !state);
    handleStripeId();
  };

  const handleStripeId = () => {
    axios.get(`/users/${userInfo.id}`).then(res => {
      console.log(res.data);
      setStripeId(res.data[0].stripe_id);
    });
  };

  return (
    <div>
      <section className="profile-wrapper">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleInputState}
        >
          Add Game
        </button>

        {inputState && <AddGame accountInfo={userInfo} stripeId={stripeId} />}
      </section>
    </div>
  );
};

export default Profile;
