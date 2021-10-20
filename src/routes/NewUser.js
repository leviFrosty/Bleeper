import React, { useState } from "react";
import { updateProfile } from "@firebase/auth";
import { useHistory } from "react-router-dom";
import urlencode from "urlencode";

export default function NewUser({ userObj, refreshDisplayName }) {
  const [newDisplayName, setNewDisplayName] = useState("");
  let history = useHistory();

  const onDisplayNameSubmit = async (event) => {
    event.preventDefault();
    await updateProfile(userObj, { displayName: newDisplayName })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        refreshDisplayName();
        history.push("/");
      });
    if (userObj.photoURL === null) {
      const encodedDisplayName = urlencode.encode(newDisplayName);
      await updateProfile(userObj, {
        photoURL: `https://ui-avatars.com/api/?name=${encodedDisplayName}?size=128?format=svg?bold=true`,
      });
    }
  };

  const onDisplayNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  return (
    <div>
      <div className="profile-welcome">
        <h1>Welcome to Bleeper!</h1>
        <p>Get started by entering your displayname below.</p>
      </div>
      <div className="profile-options">
        <div className="profile-displayName">
          <div>
            <h1>{userObj.displayName}</h1>
          </div>
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
              <button type="submit">Let's go!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
