import React, { useEffect, useState } from "react";
import "./Passwords.css";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axiosInstance";
import "boxicons";
import { turnOnLoader, turnOffLoader } from "../redux/loader";
import EditPassword from "./Modals/EditPassword";

function Passwords() {
  const navigate = useNavigate();
  const [User, setUser] = useState({});
  const [Data, setData] = useState();
  const [Passwords, setPasswords] = useState();
  const [searchTitle, setsearchTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSearchChange = (e) => {
    setsearchTitle(e.target.value);
  };

  const filterPasswordsBySearch = () => {
    if (Data) {
      const booksInCategory = Passwords.filter((data) => {
        return data.accountName
          .toLowerCase()
          .includes(searchTitle.toLowerCase());
      });
      setData(booksInCategory);
    }
    if (searchTitle === "") {
      setData(Passwords);
    }
  };

  useEffect(() => {
    filterPasswordsBySearch();
  }, [searchTitle, Data]);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleHeartClick = async (ID) => {
    let _id = {
      _id: ID,
    };
    console.log(_id);
    try {
      const data = await axiosInstance.get("/user-data/changefavourite", _id);
      console.log(data);
    } catch (err) {}
  };
  const handleDeleteClick = () => {};

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

  const getData = async () => {
    try {
      const data = await axiosInstance.get("/user-data/get-data");
      if (data.data.success === 200) {
        console.log(data.data.data);
        setData(data.data.data);
        setPasswords(data.data.data);
      } else {
        alert("There was an error. Please sign in again.");
        navigate("/");
      }
    } catch (er) {
      alert("There was an error. Please sign in again.");
      console.log(er);
      navigate("/");
    }
  };

  useEffect(() => {
    turnOnLoader();
    // Load user data from cookie when component mounts
    const userData = getCookie("user");
    if (userData !== null) {
      setUser(userData);
      getData();
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    turnOffLoader();
    console.log(Passwords);
  }, [Data]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id="Gradient">
      {showModal && <EditPassword onClose={handleCloseModal} />}
      <div className="search my-3">
        <div className="input-container">
          <input
            id="color"
            type="text"
            name="text"
            className="input"
            placeholder="Search..."
            onChange={onSearchChange}
          />
          <div className="highlight"></div>
        </div>
      </div>
      {/* <div className="headings">
        <h1>-IMPORTANT-</h1>
        {Data &&
          Array.isArray(Data) &&
          Data.map((password, index) =>
            password.important ? (
              <div className="Card col-lg-3 col-md-4 col-sm-6">
                <h1>{password.accountName}</h1>
                <div className="Card__content">
                  <p className="Card__title">Card Title</p>
                  <p className="Card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            ) : null
          )}
      </div> */}
      <div className="headings">
        <h1>-ALL PASSWORDS-</h1>
        <div id="Cards" className="row">
          {Data &&
            Array.isArray(Data) &&
            Data.map((password, index) => (
              <div className="Card col-lg-3 col-md-4 col-sm-6">
                <h1>{password.accountName}</h1>
                <div className="Card__content">
                  <div className="buttons">
                    <button className="editBtn">
                      <box-icon
                        name="edit-alt"
                        animation="tada"
                        color="#ffffff"
                      ></box-icon>
                    </button>

                    <button
                      className="likeBtn"
                      onClick={() => handleHeartClick(password._id)}
                    >
                      <box-icon
                        name="heart"
                        animation="tada"
                        color="#ffffff"
                      ></box-icon>
                    </button>

                    <button className="deleteBtn">
                      <box-icon
                        name="trash"
                        animation="tada"
                        color="#ffffff"
                      ></box-icon>
                    </button>
                  </div>
                  <p className="Card__title">
                    <div className="Email">
                      <div>Email: {password.email}</div>
                      <div>
                      <button style={{borderRadius: "2.784px" , fontSize: "11.137px"}}
                          onClick={() => {
                            navigator.clipboard.writeText(password.email);
                          }}
                        >
                          <span>
                            Copy
                          </span>
                          <span>Copied</span>
                        </button>
                      </div>
                    </div>
                  </p>
                  <p className="Card__description">
                    <div className="Email">
                      <div>
                        {showPassword
                          ? password.password
                          : "*".repeat(password.password.length)}
                      </div>
                      <div className="d-flex my-3">
                        <button
                          className="button1"
                          onClick={handleTogglePassword}
                          style={{ "margin-right": "5px" }}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                        <button style={{borderRadius: "2.784px" , fontSize: "11.137px"}}
                          onClick={() => {
                            navigator.clipboard.writeText(password.email);
                          }}
                        >
                          <span>
                            Copy
                          </span>
                          <span>Copied</span>
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Passwords;
