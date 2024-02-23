import React from "react";
import Nav from "./Nav";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <>
      <Nav />
      <div className="Content">
        <div id="Section1">
          <div className="Section1Contents">
            <img src="Section1.svg" height={`400px`} width={`400px`} />
            <div className="Section1Text rightAnimation">
              <h1>Keep your passwords</h1>
              <h1>at one place</h1>
              <h1>All your passwords at one secure place.</h1>
              <button className="button1">Start Now</button>
            </div>
          </div>
        </div>
        <div id="Section2">
          <div className="Section2Contents">
            <div className="Section2Text leftAnimation">
              <h1>
                100% security of your <br /> imporant information.
              </h1>
            </div>
            <img src="Section2.svg" height={`400px`} width={`400px`} />
          </div>
        </div>
        <div id="Section3">
          <div className="Section3Header">
            <h1>Meet our Team</h1>
            <p>
              This project was developed for our Information Security course in
              6th semester of our Bachelors degree in Computer Science from
              University of Engineering and Technology, Lahore.
            </p>
            <div className="Section3Cards">
              <div className="Section3Card">
                <img className="CardImage" src="Saad.png" />
                <div className="CardText">
                  Khawaja Saad Akbar
                  <a href="https://github.com/Xenax33" target="_blank">
                  <button className="btn">
                    Github Profile
                    {/* <img src="RightArrow.svg" /> */}
                  </button>
                  </a>
                </div>
              </div>
              <div className="Section3Card">
                <img className="CardImage" src="Bakar.jpeg" />
                <div className="CardText">
                  Abu Bakar Siddique
                  <a href="https://github.com/AbubakarFarooqi" target="_blank">
                  <button className="btn">
                    Github Profile
                    {/* <img src="RightArrow.svg" /> */}
                  </button>
                  </a>
                </div>
              </div>
              <div className="Section3Card">
                <img className="CardImage" src="Mazher.jpeg" />
                <div className="CardText">
                  Abdullah Mazher
                  <a href="https://github.com/AbdullahMazher1" target="_blank">
                  <button className="btn">
                    Github Profile
                    {/* <img src="RightArrow.svg" /> */}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default LandingPage;
