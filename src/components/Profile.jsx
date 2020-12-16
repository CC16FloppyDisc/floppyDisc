import React, { useState } from "react";
import AddGame from "./AddGame";

const Profile = () => {
  const [inputState, setInputState] = useState(false);

  const handleInputState = () => {
    setInputState(state => !state);
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

        {inputState && <AddGame />}
      </section>
    </div>
  );
};

export default Profile;
