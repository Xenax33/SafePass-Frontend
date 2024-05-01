import React, { useState , useEffect} from "react";
import "./Login.css";
import axios from "axios";
import Nav from "../Landing Page/Nav";
import { Link ,useNavigate } from "react-router-dom";
import Recaptcha from "../Recaptcha/Recaptcha";
import { useDispatch } from "react-redux";
import { turnOnLoader, turnOffLoader  } from "../redux/loader";
import { axiosInstance } from "../User/axiosInstance";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const [User , setUser] = useState ({
    email: "",
    password : ""
  })


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

  const handleInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const Login = async () => {
    
    try{
      const data = await axiosInstance.post(
        "/users/login",
        User,
      );
      console.log(data);
      if(data.data.success === 200)
      {
        setCookie(
            "user",
          {
            _id: data.data.data._id,
            name: data.data.data.name,
            email: User.email,
          },
          3600
        );
        navigate("/user/landing");
      }
      dispatch(turnOffLoader());
    }
    catch(err)
    {
      console.log(err)
      dispatch(turnOffLoader());
      alert("There was an error. Please try again.");
      navigate("/");
    }
  };

  return (
    <>
      <div style={{ position: "fixed" }}>
        <Nav />
      </div>
      <div id="SignUp">
        <div className="SignUp">
          <div className="SignUpLeft">
            <h1 style={{ textAlign: "center" }}>Welcome Back</h1>
            <img src="LogIn.svg" height={500} alt="error" />
          </div>
          <div className="form">
            <h2>Sign In</h2>
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
            <p>Forgot Password?</p>
            <Recaptcha
              captchaVerified={captchaVerified}
              setCaptchaVerified={setCaptchaVerified}
            />
            <button
              className="button1"
              style={{ borderRadius: "6px" }}
              disabled={captchaVerified}
              onClick={Login}
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
