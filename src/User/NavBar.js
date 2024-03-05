import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import "./NavBar.css";
import AddPassword from "./Modals/AddPassword";

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  
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
              Dropdown
            </a>
            <div className="dropdown-content">
              <a onClick={handleAddPasswordClick}>Add Password</a>
              <Link to={'/user/generatepassword'}>Generate Password</Link>
              <a >Link 3</a>
            </div>
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
