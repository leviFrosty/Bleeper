import React from "react";
import logo from "images/logo.webp";
import SignInForm from "components/signin/SignInForm";
import SignInSocials from "components/signin/SignInSocials";

export default function Auth() {
  return (
    <div>
      <div className="welcome">
        <h1 className="welcome-title">
          Bleeper
          <span>
            <img src={logo} alt="" />
          </span>
        </h1>
      </div>
      <div className="signin__container">
        <div className="signin-title">
          <h2>Please sign in</h2>
        </div>
        <div className="signin">
          <SignInForm />
          <SignInSocials />
        </div>
      </div>
    </div>
  );
}
