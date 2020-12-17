import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  //local state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stripeId, setStripeId] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogIn = () => {
    history.push("/login");
  };

  // Form Field Handlers
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  //on Register form submit
  const handleSubmit = e => {
    e.preventDefault();
    // Call the api
    axios
      .post("/signup", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        stripe_id: stripeId,
      })
      .then(res => {
        console.log("Login Success", res);
        if (res.status === 200) {
          //Reset Form field
          resetForm();
          // Inform User
          setLoginSuccess(true);
        }
      })
      .catch(err => {
        console.log("Error registering user", err);
      });
  };

  return (
    <div>
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name_field">Enter your first name</label>

          <input
            id="first_name_field"
            type="text"
            className="nes-input is-dark"
            placeholder="First Name"
            required
            value={firstName}
            onChange={e => handleFirstNameChange(e)}
          />
          <label htmlFor="last_name_field">Enter your last name</label>

          <input
            id="last_name_field"
            type="text"
            className="nes-input is-dark"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={e => handleLastNameChange(e)}
          />
          <label htmlFor="last_name_field">Enter your email</label>

          <input
            id="email_field"
            type="email"
            className="nes-input is-dark"
            placeholder="Email"
            required
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

          <button className="nes-btn is-primary is-dark" type="submit">
            Sign Up
          </button>
          <button className="nes-btn  is-dark" onClick={handleLogIn}>
            Login
          </button>
        </form>
      </div>
      {loginSuccess && <p> Registered Successfully, Login to continue</p>}
    </div>
  );
};

export default Register;
