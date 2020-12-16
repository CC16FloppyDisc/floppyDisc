import React, { useState } from "react";
// import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Header = () => {
  // const [createUserLink, setCreateUserLink] = useState();
  const createUser = async () => {
    const link = await axios.post("/api/createuser").then(res => res.data);
    if (link) {
      window.open(link);
    }
    return;
  };
  return (
    <div>
      <div className="login-wrapper">
        <button
          onClick={() => createUser()}
          type="button"
          className="nes-btn is-primary is-dark"
          id="seller-signup-btn"
        >
          Log In{" "}
        </button>
        <h1>Floppy Discs</h1>
        <button
          onClick={() => createUser()}
          type="button"
          className="nes-btn is-primary is-dark"
          id="seller-login-btn"
        >
          Sign Up{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
