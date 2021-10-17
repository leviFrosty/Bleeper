import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "fbInstance";
import { useHistory } from "react-router-dom";

export default function Profile() {
  let history = useHistory();
  const onSignoutClick = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
    history.push("/");
  };

  return (
    <div className="profile">
      <div>My Profile</div>
      <button onClick={onSignoutClick}>Sign out</button>
    </div>
  );
}
