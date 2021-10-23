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
        <div className="bg">
          {/* Top left */}
          <div className="bg_top_left_1"></div>
          <div className="bg_top_left_2"></div>
          {/* -- Start -- Top right */}
          {/* Row one */}
          <div className="bg_top_right_row-1_item1__container">
            <div className="r1_i1__box" />
            <div className="r1_i1__triangle" />
          </div>
          <div className="bg_top_right_row-1_item2__container">
            <div className="r1_i2__box" />
            <div className="r1_i2__triangle" />
          </div>
          <div className="bg_top_right_row-1_item3__container">
            <div className="r1_i3__box" />
            <div className="r1_i3__triangle" />
          </div>
          <div className="bg_top_right_row-1_item4__container">
            <div className="r1_i4__box" />
            <div className="r1_i4__triangle" />
          </div>
          {/* Row 2 */}
          <div className="bg_top_right_row-2_item1__container">
            <div className="r2_i1__box" />
            <div className="r2_i1__triangle" />
          </div>
          <div className="bg_top_right_row-2_item2__container">
            <div className="r2_i2__box" />
            <div className="r2_i2__triangle" />
          </div>
          <div className="bg_top_right_row-2_item3__container">
            <div className="r2_i3__box" />
            <div className="r2_i3__triangle" />
          </div>
          <div className="bg_top_right_row-2_item4__container">
            <div className="r2_i4__box" />
            <div className="r2_i4__triangle" />
          </div>
          {/* -- End -- Top Right */}
          {/* Bottom Right */}
          <div className="bg_bottom-right_1"></div>
          <div className="bg_bottom-right_2"></div>
          <div className="bg_bottom-right_3"></div>
          <div className="bg_bottom-right_4"></div>
          <div className="bg_bottom-right_5"></div>
        </div>
      </div>
    </div>
  );
}
