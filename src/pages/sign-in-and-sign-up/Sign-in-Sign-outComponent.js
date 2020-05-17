import React from "react";
import SignIn from "../../components/Signin/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./sign-in-sign-up.styles.scss";
export const SignInSignOutPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
