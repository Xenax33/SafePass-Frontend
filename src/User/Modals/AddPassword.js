import React , {useEffect , useState} from "react";
import "./AddPassword.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function AddPassword({ onClose }) {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    accountName: "",
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

  const handleInputChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    onClose(); // Call the onClose function passed from props
  };

  const handleSubmit = async()=>{
    console.log(User)
    try{
      const data = await axios.post(
        "http://localhost:8080/api/v1/user-data/add-data",
        User
      );
      console.log(data)
      if(data.data.success === 200)
      {
        handleClose();
      }
      else{
        alert("There was an error. Please try again");
        handleClose();
      }
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(() => {
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

  // useEffect(() => {
  //   console.log
  // }, [User]);
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Add Password</h2>
          </div>
          <div className="modal-body">
            <div id="width" className="input-container">
              <input
                id="width"
                type="text"
                name="accountName"
                className="input"
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
            <div id="width" className="input-container">
              <input
                id="width"
                type="email"
                name="email"
                className="input"
                placeholder="Enter Email"
                autoComplete="off"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
            <div id="width" className="input-container">
              <input
                id="width"
                type="password"
                name="password"
                className="input"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
              <div className="highlight"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="button1" onClick={handleSubmit}>
              <div className="d-flex">
                Confirm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="`.5em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path
                      strokeDasharray={14}
                      strokeDashoffset={14}
                      d="M6 19h12"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.4s"
                        values="14;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={18}
                      strokeDashoffset={18}
                      d="M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="18;0"
                      ></animate>
                      <animate
                        attributeName="d"
                        calcMode="linear"
                        dur="1.5s"
                        keyTimes="0;0.7;1"
                        repeatCount="indefinite"
                        values="M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5;M12 15 h2 v-3 h2.5 L12 7.5M12 15 h-2 v-3 h-2.5 L12 7.5;M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5"
                      ></animate>
                    </path>
                  </g>
                </svg>
              </div>{" "}
            </button>
            <button className="button2" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPassword;
