import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState();

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
    let userInfo;
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then(res => {
        console.log("Login Success", res.data);
        userInfo = jwt_decode(res.data.authToken);
        if (res.status === 200) {
          history.push("/dashboard", userInfo);
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
        <div className="login-wrapper input-wrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email_field">Enter your email</label>

            <input
              id="email_field"
              className="nes-input is-dark"
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={e => handleEmailChange(e)}
            />
            <label htmlFor="password_field">Enter your password</label>

            <input
              id="password_field"
              type="password"
              className="nes-input is-dark"
              placeholder="Password"
              required
              value={password}
              onChange={e => handlePasswordChange(e)}
            />
            <button
              className="nes-btn is-primary is-dark"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button className="nes-btn  is-dark" type={"submit"}>
              Log In
            </button>
          </form>
        </div>
      )}

      {/* PROFILE AREA AND LINK TO STRIPE  */}

      {/* {loggedIn && (
        <div className="profile-header">
          <button className="nes-btn is-primary is-dark" onClick={createUser}>
            Log in to Stripe
          </button>
          <h1>PPROFILE!!</h1>
        </div>
      )} */}
    </div>
  );
};

export default Login;
