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
            <button onClick={toggleEditing}>Cancel</button>
          ) : (
            <button onClick={toggleEditing}>Edit</button>
          )}

          {editing ? (
            <button onClick={onSave}>Save</button>
          ) : (
            <button onClick={onDeleteClick}>Delete</button>
          )}
        </div>
      );
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onSave = async (event) => {
    event.preventDefault();
    await setDoc(
      doc(db, "tweets", tweet.id),
      {
        text: newTweet,
      },
      { merge: true }
    );
    toggleEditing();
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
          <form onSubmit={onSave}>
            <input
              value={newTweet}
              required
              maxLength={140}
              onChange={onEdit}
            />
            <span>{newTweet.length}</span>
            <span>/140</span>
          </form>
        </>
      ) : (
        <h3>{tweet.text}</h3>
      )}
      <img src={tweet.userPhotoURL} alt={tweet.displayName} />
      {ownerOptions()}
    </div>
  );
}