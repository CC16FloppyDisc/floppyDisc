import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Profile from "../components/Profile";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    // setLoggedIn(!loggedIn);
  };

  // Login form field handlers
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSignUp = () => {
    history.push("/register");
  };
  // const createUser = async () => {
  //   const link = await axios.post("/api/createuser").then(res => res.data);
  //   if (link) {
  //     window.open(link);
  //   }
  //   return;
  // };

  //on Register form submit
  const handleSubmit = e => {
    e.preventDefault();
    // Call the api

    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then(res => {
        console.log("Login Success", res);
        if (res.status === 200) {
          history.push("/dashboard");
        }
      })
      .catch(err => {
        console.log("Error singing in", err);
      });
  };

  const createUser = async () => {
    const link = await axios.post("/api/createuser").then(res => res.data);
    if (link) {
      window.open(link);
    }
    return;
  };

  return (
    <div>
      {!loggedIn && (
        <div className="login-wrapper">
          <form>
            <label htmlFor="email_field">Enter your email</label>

            <input
              id="email_field"
              type="text"
              className="nes-input is-dark"
              placeholder="Email"
            />
            <label htmlFor="password_field">Enter your password</label>

            <input
              id="password_field"
              type="text"
              className="nes-input is-dark"
              placeholder="Password"
            />
            <button className="nes-btn is-primary is-dark">Sign Up</button>
            <button className="nes-btn  is-dark" onClick={handleLogIn}>
              Log In
            </button>
          </form>
        </div>
      )}

      {/* PROFILE AREA AND LINK TO STRIPE  */}

      {loggedIn && (
        <div className="profile-header">
          <button className="nes-btn is-primary is-dark" onClick={createUser}>
            Log in to Stripe
          </button>
          <Profile />{" "}
        </div>
      )}
    </div>
  );
};

export default Login;
