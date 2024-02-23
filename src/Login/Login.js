import React, { useState } from "react";
import "./Login.css";
import Nav from "../Landing Page/Nav";
import { Link } from "react-router-dom";
import Recaptcha from "../Recaptcha/Recaptcha";

function Login() {
  const [captchaVerified, setCaptchaVerified] = useState(true);

  return (
    <>
      <div style={{ position: "fixed" }}>
        <Nav />
      </div>
      <div id="SignUp">
        <div className="SignUp">
          <div className="SignUpLeft">
            <h1 style={{ textAlign: "center" }}>Welcome Back</h1>
            <img src="LogIn.svg" height={500} />
          </div>
          <div className="form">
            <h2>Sign In</h2>
            <div className="input-container">
              <input
                type="email"
                name="text"
                className="input"
                placeholder="Enter Email"
              />
              <div className="highlight"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="text"
                className="input"
                placeholder="Enter Password"
              />
              <div className="highlight"></div>
            </div>
            <p>Forgot Password?</p>
            <Recaptcha  captchaVerified= {captchaVerified} setCaptchaVerified= {setCaptchaVerified} />
            <button
              className="button1"
              style={{ borderRadius: "6px" }}
              disabled={captchaVerified}
            >
              Log In
            </button>

            <p>
              Create an account <Link to={"/signup"}> here. </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
