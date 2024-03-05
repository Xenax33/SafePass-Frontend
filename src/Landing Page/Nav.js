import React from "react";
import { Link ,useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const onLogoClick = ()=>
  {
    navigate('/')
  }
  return (
    <nav>
      <div id="navbar">
        <div className="logo" onClick={onLogoClick}>
            <img src="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logo_irvxia.svg" height={50} width={50} alt="error" />
            <img src="https://res.cloudinary.com/djiqxvcin/image/upload/v1709655100/logotext_yoy0iu.svg" width={100} alt="error" />
        </div>
        <div className="navlist">
          <ul>
            <li>
              {" "}
              <Link to={"/login"}>
                <button className="button2"> Log In</button>
              </Link>
            </li>
            <li>
              {" "}
              <Link to={"/signup"}>
                <button className="button1"> Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
