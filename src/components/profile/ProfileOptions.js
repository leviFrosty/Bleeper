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
      <div className="profile-options__container">
        <div className="profile-displayName__container">
          <div className="profile-displayName">
            <h1>{userObj.displayName}</h1>
            <span
              className="profile-editName"
              onClick={onDisplayNameEditToggle}
            >
              <i className="fas fa-edit profile-editName__icon"></i>
            </span>
          </div>
        </div>
        <button className="profile-signOut" onClick={onSignoutClick}>
          Sign out
        </button>
      </div>
      {isEditingDisplayName && (
        <div className="profile-editNameModal">
          <h2 className="profile-editNameModal-title">Change your name</h2>
          <form
            className="profile-editNameModal-form"
            onSubmit={onDisplayNameSubmit}
          >
            <div className="profile-editNameModel-form__inputContainer">
              <input
                className="profile-editNameModal-form__input"
                required
                maxLength={29}
                type="text"
                onChange={onDisplayNameChange}
              />
              <button
                className="profile-editNameModal-form__submit"
                type="submit"
              >
                Save
              </button>
            </div>
            <p className="profile-editNameModal-form__desc">
              Your name how it will appear to other users.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
