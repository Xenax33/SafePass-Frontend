import React, { useState, useEffect } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
  });
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie
        .split("=")
        .map((part) => part.trim());
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
    if (userData !== null) {
      setUser(userData);
    } else {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    console.log(User)
  }, [User]);
  return (
    <div className="container">
      <div className="container1">
        <div className="rope center">
          <div className="legs center">
            <div className="boot-l"></div>
            <div className="boot-r"></div>
          </div>
          <div className="costume center">
            <div className="spider">
              <div className="s1 center"></div>
              <div className="s2 center"></div>
              <div className="s3"></div>
              <div className="s4"></div>
            </div>
            <div className="belt center"></div>
            <div className="hand-r"></div>
            <div className="hand-l"></div>
            <div className="neck center"></div>
            <div className="mask center">
              <div className="eye-l"></div>
              <div className="eye-r"></div>
            </div>
            <div className="cover center"></div>
          </div>
        </div>
      </div>
      <h1 className="textt">
        Keep your passswords safe from all cyber bugs &#128375;
      </h1>
    </div>
  );
}

export default Landing;
