import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import AddPassword from "./Modals/AddPassword";
import GeneratePassword from "./Modals/GeneratePassword";

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  const handleAddPasswordClick = () => {
    setShowModal(true);
  };
  const handleGeneratePasswordClick = () => {
    setShowModal2(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowModal2(false);
  };

  return (
    
    <>
      <nav>
        {showModal && <AddPassword onClose={handleCloseModal} />}
        <div id="navbar">
          <div className="logo" onClick={onLogoClick}>
            <img src="logo.svg" height={50} width={50} alt="error" />
            <img src="logotext.svg" width={100} alt="error" />
          </div>
          <li className="dropdown">
            <a className="dropbtn">
              Dropdown
            </a>
            <div className="dropdown-content">
              <a onClick={handleAddPasswordClick}>Add Password</a>
              <a onClick={handleGeneratePasswordClick}>Generate Password</a>
              <a >Link 3</a>
            </div>
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
