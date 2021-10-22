import React from "react";
import logo from "images/logo.webp";
import SignInForm from "components/signin/SignInForm";
import SignInSocials from "components/signin/SignInSocials";

export default function Auth() {
  return (
    <div className="welcome">
      <div className="welcome-start">
        <div className="signin__container">
          <div className="signin-header">
            <div className="signin-header__logo">
              <img src={logo} alt="" />
            </div>
            <div className="signin-header__title">
              <h1>Login</h1>
            </div>
            <div className="signin-header__description">
              <p>Connect with your friends and share memories!</p>
            </div>
          </div>
          <div className="signin-socials">
            <SignInSocials />
          </div>
          <div className="break-container">
            <div className="break-start"></div>
            <div className="break-text">or Sign in with Email</div>
            <div className="break-end"></div>
          </div>
          <SignInForm />
        </div>
      </div>
      <div className="welcome-end">
        <div className="hero">
          <div className="hero__brand">
            <h3>Bleeper</h3>
            <span>
              <img src={logo} alt="" />
            </span>
          </div>
          <div className="hero__container">
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
