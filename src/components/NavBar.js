import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-start">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-end">
          <Link to="/profile">My profile</Link>
          <button onClick={() => {}}>Log out</button>
        </div>
      </div>
    </div>
  );
}
