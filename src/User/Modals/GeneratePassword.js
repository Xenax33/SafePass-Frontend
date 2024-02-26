import React from "react";
import "./GeneratePassword.css";

function GeneratePassword({ onClose }) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from props
  };
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Generate Password</h2>
          </div>
          <div className="modal-body1">
            {/* <div className="input-container">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Password"
              />
              <div className="highlight"></div>
            </div> */}
            <div id="checklist">
              <input checked="" value="1" name="r" type="checkbox" id="01" />
              <label for="01">Capital Alphabets</label>
              <input value="2" name="r" type="checkbox" id="02" />
              <label for="02">Numbers</label>
              <input value="3" name="r" type="checkbox" id="03" />
              <label for="03">Special Characters</label>
            </div>
          </div>
          <div className="modal-footer">
            <button className="button1">
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

export default GeneratePassword;
