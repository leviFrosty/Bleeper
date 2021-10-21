import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "fbInstance";

export default function ProfileOptions({ userObj, refreshDisplayName }) {
  const [newDisplayName, setNewDisplayName] = useState("");
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
  let history = useHistory();

  const onSignoutClick = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
    history.push("/");
  };
  const onDisplayNameSubmit = async (event) => {
    event.preventDefault();
    await updateProfile(userObj, { displayName: newDisplayName });
    setIsEditingDisplayName(false);
    refreshDisplayName();
  };

  const onDisplayNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onDisplayNameEditToggle = () => {
    setIsEditingDisplayName(!isEditingDisplayName);
  };
  return (
    <div className="profile-options">
      <div className="profile-displayName">
        <div>
          <h1>{userObj.displayName}</h1>
          <span onClick={onDisplayNameEditToggle}>
            <i className="fas fa-edit"></i>
          </span>
        </div>
        {isEditingDisplayName && (
          <div className="visually-hidden modal">
            <h2>Name</h2>
            <form onSubmit={onDisplayNameSubmit}>
              <input
                required
                maxLength={29}
                type="text"
                onChange={onDisplayNameChange}
              />
              <p>Your name how it will appear to other users.</p>
              <button type="submit">Save</button>
            </form>
          </div>
        )}
      </div>
      <button onClick={onSignoutClick}>Sign out</button>
    </div>
  );
}
