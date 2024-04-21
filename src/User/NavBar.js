import React, { useState , useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import "./NavBar.css";
import AddPassword from "./Modals/AddPassword";
import { useDispatch } from "react-redux";
import { turnOnLoader, turnOffLoader } from "../redux/loader";

function NavBar() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [User, setUser] = useState({
    name: "",
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
  
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/user/landing");
  };

  const handleAddPasswordClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(turnOnLoader());
    // Load user data from cookie when component mounts
    const userData = getCookie("user");
    if(userData !== null)
    {
      setUser(userData);
    }
    else{
      navigate('/')
    }
  }, []);

  useEffect(() => {
    dispatch(turnOffLoader());
  }, [User]);

  return (
    <>
      <nav id="nav">
        {showModal && <AddPassword onClose={handleCloseModal} />}
        <div id="navbar">
          <div className="logo" onClick={onLogoClick}>
            <img src="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logo_irvxia.svg" height={50} width={50} alt="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logo_irvxia.svg" />
            <img src="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logotext_yoy0iu.svg" width={100} alt="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logotext_yoy0iu.svg" />
          </div>
          <li className="dropdown">
            <a className="dropbtn">
              {User.name}
            </a>
            <div className="dropdown-content">
              <a onClick={handleAddPasswordClick}>Add Password</a>
              <Link to={'/user/generatepassword'}>Generate Password</Link>
              <Link to={'/user/passwords'}>Your Passwords</Link>
              <Link to={'/'}>Log Out</Link>
            </div>
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
