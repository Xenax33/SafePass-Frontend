import React, { useState } from "react";
import "./GeneratePassword.css";
import NavBar from "./NavBar";

function GeneratePassword() {
  const [errors, setErrors] = useState("");
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("Press button to generate...");
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [LowerCase, setLowerCase] = useState(false);
  const [UpperCase, setUpperCase] = useState(false);

  const addLength = () => {
    if(length<30)
    {
      setLength(length + 1);
    }
  };
  const subtractLength = () => {
    if (length > 10) {
      setLength(length - 1);
    }
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  const generatePassword = () => {
    setErrors({});
    if (!numbers && !symbols && !LowerCase && !UpperCase) {
      return setPassword("Check atleast one option from checklist");
    } else if (length === 0) {
      return setErrors("Password length cannot be 0");
    } else if (length < 10) {
      return setErrors("Invalid password length");
    } else if (length >= 30) {
      return setErrors("Password length cannot exceed 30 characters");
    }

    let passsword = "";
    for (let i = 0; i < length; i++) {
      let choice = random(0, 3);
      if (LowerCase && choice === 0) {
        passsword += randomLower();
      } else if (UpperCase && choice === 1) {
        passsword += randomUpper();
      } else if (symbols && choice === 2) {
        passsword += randomSymbol();
      } else if (numbers && choice === 3) {
        passsword += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(passsword);
  };
  return (
    <>
      <section className="Main">
        <div id="checklist">
          <input
            value="1"
            name="r"
            type="checkbox"
            id="01"
            onChange={() => {
              setNumbers((numbers) => !numbers);
            }}
          />
          <label htmlFor="01">Allow Numbers</label>
          <input
            value="2"
            name="r"
            type="checkbox"
            id="02"
            onChange={() => {
              setSymbols((symbols) => !symbols);
            }}
          />
          <label htmlFor="02">Allow Symbols</label>
          <input
            value="3"
            name="r"
            type="checkbox"
            id="03"
            onChange={() => {
              setLowerCase((LowerCase) => !LowerCase);
            }}
          />
          <label htmlFor="03">Allow LowerCase</label>
          <input
            value="4"
            name="r"
            type="checkbox"
            id="04"
            onChange={() => {
              setUpperCase((UpperCase) => !UpperCase);
            }}
          />
          <label htmlFor="04">Allow UpperCase</label>
        </div>
        <div className="Col">
          <label htmlFor="input">Select the lenght of password</label>
          <div className="Length">
            <button className="button1 center1" onClick={addLength}>
              {" "}
              +
            </button>

            <div className="input-container">
              <input
                id="#input"
                type="number"
                name="name"
                className="input"
                placeholder="Enter Name"
                disabled={true}
                value={length}
              />
              <div className="highlight"></div>
            </div>
            <button className="button1 center1" onClick={subtractLength}>
              {" "}
              -
            </button>
          </div>
          <button className="button2 Generate" onClick={generatePassword}>
            Generate
          </button>

          <div className="GeneratedText">
            <div className=" Generate">
              <input
                type="text"
                name="name"
                className="input Generate"
                disabled={true}
                value={password}
              />
              <div className="highlight"></div>
            </div>
            <div className="centralize">
              <div>
                <button onClick={() => navigator.clipboard.writeText(password)} >
                  <span >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"
                      ></path>
                    </svg>
                    Copy
                  </span>
                  <span>Copied</span>
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeneratePassword;
