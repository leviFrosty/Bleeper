import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "images/logo.webp";

export default function NavBar({ userObj }) {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-start">
          <Link to="/">
            <img className="nav-home" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links">
          <NavLink className="NavLink" exact to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/profile">
            Profile
          </NavLink>
        </div>
        <div className="nav-end">
          <Link className="navProfile-link" to="/profile">
            {userObj.photoURL && (
              <img className="navProfile-image" src={userObj.photoURL} alt="" />
            )}
            {userObj.displayName}
          </Link>
        </div>
      </div>
    </div>
  );
}
