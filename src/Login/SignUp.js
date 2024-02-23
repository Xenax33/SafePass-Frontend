import React , {useState} from "react";
import "./Login.css";
import Nav from "../Landing Page/Nav";
import { Link } from "react-router-dom";
import Recaptcha from "../Recaptcha/Recaptcha";


function SignUp() {
  const [captchaVerified, setCaptchaVerified] = useState(true);

  return (
    <>
      <div style={{ position: "fixed" }}>
        <Nav />
      </div>
      <div id="SignUp">
        <div className="SignUp">
          <div className="SignUpLeft">
            <h1 style={{ textAlign: "center" }}>Welcome to SAFEPASS</h1>
            <img src="logo.svg" height={500} alt= "error" />
          </div>
          <div className="form">
            <h2>Create an Account</h2>
            <div className="input-container">
              <input
                type="name"
                name="text"
                className="input"
                placeholder="Enter Username"
                autoComplete="false"
              />
              <div className="highlight"></div>
            </div>
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
            <Recaptcha  captchaVerified= {captchaVerified} setCaptchaVerified= {setCaptchaVerified} />

            <button className="button1" style={{ borderRadius: "6px" }} disabled= {captchaVerified}>
              Sign Up
            </button>
            <p>Already have an Account? <Link to={'/login'}> Log in here </Link> </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
