import React, { useState , useEffect} from "react";
import "./Login.css";
import Nav from "../Landing Page/Nav";
import { Link } from "react-router-dom";
import Recaptcha from "../Recaptcha/Recaptcha";
import { useDispatch } from "react-redux";
import { turnOnLoader, turnOffLoader  } from "../redux/loader";

function Login() {
  const dispatch = useDispatch();
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const [User , setUser] = useState ({
    name: "",
    email: "",
    password : ""
  })

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=').map(part => part.trim());
      if (cookieName === name) {
        // Decode the URL-encoded value
        const decodedValue = decodeURIComponent(cookieValue);
        // Parse the JSON string into a JavaScript object
        return JSON.parse(decodedValue);
      }
    }
    return null;
  }
  

  useEffect(() => {
    // Load user data from cookie when component mounts
    const userData = getCookie("user");
    setUser(userData)
  }, []);
  useEffect(() => {
    console.log(User)
  }, [User]);

  const Login = () => {
    dispatch(turnOnLoader());
    // Perform some asynchronous task
    setTimeout(() => {
      dispatch(turnOffLoader());
    }, 2000);
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
