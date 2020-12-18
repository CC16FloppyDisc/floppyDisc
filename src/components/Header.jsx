import React, { useState } from "react";
// import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  // const [createUserLink, setCreateUserLink] = useState();

  const handleLoginButton = () => {
    history.push("/login");
  };

  const handleSignupButton = () => {
    history.push("/register");
  };

  return (
    <div>
      <button
        onClick={() => handleLoginButton()}
        type="button"
        className="nes-btn is-primary is-dark"
        id="seller-signup-btn"
      >
        Log In{" "}
      </button>
      <button
        onClick={() => handleSignupButton()}
        type="button"
        className="nes-btn is-primary is-dark"
        id="seller-login-btn"
      >
        Sign Up{" "}
      </button>
      <div className="login-wrapper">
        <h1>TimeMachine</h1>
      </div>
    </div>
  );
};

export default Header;
