import React from "react";
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { db } from "fbInstance";
import { useState } from "react/cjs/react.development";

export default function TweetCard({ tweet, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweet.text);

  const ownerOptions = () => {
    if (isOwner) {
      return (
        <div>
          {editing ? (
            <button onClick={onCancelClick}>Cancel</button>
          ) : (
            <button onClick={onEditClick}>Edit</button>
          )}

          {editing ? (
            <button onClick={onSaveClick}>Save</button>
          ) : (
            <button onClick={onDeleteClick}>Delete</button>
          )}
        </div>
      );
    }
  };

  const onEditClick = () => {
    setEditing(true);
  };

  const onCancelClick = () => {
    setEditing(false);
  };

  const onSaveClick = async () => {
    console.log("saved.");
    await setDoc(
      doc(db, "tweets", tweet.id),
      {
        text: newTweet,
      },
      { merge: true }
    );
    setEditing(false);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await deleteDoc(doc(db, "tweets", tweet.id));
    }
  };

  const onEdit = (event) => {
    const {
      target: { value },
    } = event;
    setNewTweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <input value={newTweet} required maxLength={140} onChange={onEdit} />
          <span>{newTweet.length}</span>
          <span>/140</span>
        </>
      ) : (
        <h3>{tweet.text}</h3>
      )}
      <img src={tweet.userPhotoURL} alt={tweet.displayName} />
      {ownerOptions()}
    </div>
  );
}
