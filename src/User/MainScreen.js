import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function MainScreen() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}

export default MainScreen;
