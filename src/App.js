import "./App.css";
import React, { useEffect , useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LandingPage from "./Landing Page/LandingPage";
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
// import axios from "axios";
import Spinner from "./Spinner/Spinner";
import Error404 from "./404 Page/Error404";
import { useSelector } from "react-redux";
import SessionTimeout from "./Modals/SessionTimeout";
import GeneratePassword from "./User/Modals/GeneratePassword";

function App() {
  const isLoading = useSelector((state) => state.loader);

  
  useEffect(() => {
    // dispatch(turnOnLoader());
    // // Perform some asynchronous task
    // setTimeout(() => {
    //   dispatch(turnOffLoader());
    // }, 2000);
  });



  // const getLocation = async () => {
  //   try {
  //     const data = await axios.get("https://api.ipify.org?format=json"); // get ip address
  //     console.log(data);
  //     const response = await axios.get(
  //       "https://geo.ipify.org/api/v2/country?apiKey=at_WXXZD0WmzZzIpOsDQW7kNUck4p4sw&ipAddress=" +
  //         data.data.ip
  //     );
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



  return (
    <>
      {isLoading && <Spinner />}
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<LandingPage />} /> */}
          <Route index path="/" element={<GeneratePassword />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<SignUp />} />
          <Route index path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
