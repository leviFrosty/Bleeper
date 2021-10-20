import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ userObj }) {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-start">
          <Link to="/">
            <i class="fas fa-home"></i>
          </Link>
        </div>
        <div className="nav-end">
          <Link to="/profile">
            {userObj.displayName} <i class="fas fa-address-card"></i>
          </Link>
          {userObj.photoURL && <img src={userObj.photoURL} alt="" />}
        </div>
      </div>
    </div>
  );
}
