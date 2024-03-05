import React , {useState} from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function MainScreen() {
  // const [GeneratePassword , setGeneratePassword] = useState(false)
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}

export default MainScreen;
