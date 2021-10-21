import React from "react";
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { db } from "fbInstance";
import { useState } from "react/cjs/react.development";
import { deleteObject } from "@firebase/storage";
import { ref } from "firebase/storage";
import { storage } from "../fbInstance";

export default function TweetCard({ tweet, isOwner, attachmentURL }) {
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
      if (attachmentURL !== "") {
        await deleteObject(ref(storage, attachmentURL)).catch((error) => {
          console.log(error);
        });
      }
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
      {attachmentURL && (
        <div className="attachment">
          <span>Attachment:</span>
          <img src={attachmentURL} alt="" />
        </div>
      )}
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
        <div>
          <h3>{tweet.text}</h3>
        </div>
      )}
      <div className="tweet-user">
        <h4>{tweet.creatorDisplayName}</h4>
        <img src={tweet.userPhotoURL} alt={tweet.displayName} />
      </div>
      {ownerOptions()}
    </div>
  );
}
