import React from "react";
import Sign from "../../entities/Sign";
import { useLocation } from "react-router-dom";
import SignUp from "../../entities/Sign/SignUp";

const AuthPage = () => {
    const location=useLocation()
    const key =location?.search?.split("=")?.[1]
  return (<>{
    key!=="registrations"?
    <Sign />:
    <SignUp/>
  }
  </>) 
};

export default AuthPage;
