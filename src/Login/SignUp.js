import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Nav from "../Landing Page/Nav";
import { Link, useNavigate } from "react-router-dom";
import Recaptcha from "../Recaptcha/Recaptcha";
import { useDispatch } from "react-redux";
import { turnOnLoader, turnOffLoader } from "../redux/loader";
import { axiosInstance } from "../User/axiosInstance";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function setCookie(name, value, expirationSeconds) {
    const expirationDate = new Date(Date.now() + expirationSeconds * 1000);

    // Ensure value is a plain JavaScript object
    const jsonValue = typeof value === "object" ? JSON.stringify(value) : value;

    // Set the cookie with encoded JSON value and expiration date
    const cookieValue =
      encodeURIComponent(jsonValue) +
      "; expires=" +
      expirationDate.toUTCString() +
      "; path=/";
    document.cookie = name + "=" + cookieValue;
  }

  const signUp = async () => {
    dispatch(turnOnLoader());
    try {
      const data = await axiosInstance.post(
        "/users/register",
        User
      );
      if (data.data.success === 200) {
        setCookie(
          "user",
          {
            _id: data.data.data,
            name: User.name,
            email: User.email,
          },
          3600  
        );
        dispatch(turnOffLoader());
        navigate("/user/landing");
      } else {
        dispatch(turnOffLoader());
        alert("There was an error. Please try again.");
        navigate("/");
      }
    } catch (err) {
      console.log(err)
      dispatch(turnOffLoader());
      alert("There was an error. Please try again.");
      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ position: "fixed" }}>
        <Nav />
      </div>
      <div id="SignUp">
        <div className="SignUp">
          <div className="SignUpLeft">
            <h1 style={{ textAlign: "center" }}>Welcome to SAFEPASS</h1>
            <img src="logo.svg" height={500} alt="error" />
          </div>
          <div className="form">
            <h2>Create an Account</h2>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Username"
                autoComplete="false"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
            <Recaptcha
              captchaVerified={captchaVerified}
              setCaptchaVerified={setCaptchaVerified}
            />

            <button
              className="button1"
              style={{ borderRadius: "6px" }}
              disabled={captchaVerified}
              onClick={signUp}
            >
              Sign Up
            </button>
            <p>
              Already have an Account? <Link to={"/login"}> Log in here </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
