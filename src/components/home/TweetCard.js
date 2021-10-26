import React from "react";
import { deleteDoc, setDoc, doc } from "firebase/firestore";
import { db } from "fbInstance";
import { useState } from "react/cjs/react.development";
import { deleteObject } from "@firebase/storage";
import { ref } from "firebase/storage";
import { storage } from "../../fbInstance";

export default function TweetCard({ tweet, isOwner, attachmentURL }) {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweet.text);

  const ownerOptions = () => {
    if (isOwner) {
      return (
        <div>
          {editing ? (
            <button className="editing__button" onClick={toggleEditing}>
              Cancel
            </button>
          ) : (
            <button className="editing__button" onClick={toggleEditing}>
              Edit
            </button>
          )}

          {editing ? (
            <button className="editing__button" onClick={onSave}>
              Save
            </button>
          ) : (
            <button className="editing__button" onClick={onDeleteClick}>
              Delete
            </button>
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
    <div className="tweetCard">
      <div className="tweetCard-user">
        <img
          className="tweetCard-user__img"
          src={tweet.userPhotoURL}
          alt={tweet.displayName}
        />
        <h4 className="tweetCard-user__name">{tweet.creatorDisplayName}</h4>
      </div>
      {editing ? (
        <>
          <form className="tweetCard-editing" onSubmit={onSave}>
            <input
              value={newTweet}
              required
              maxLength={140}
              onChange={onEdit}
              className="tweetCard-editing__input"
            />
            <div className="tweetCard-editing__chars">
              <span>{newTweet.length}</span>
              <span>/140</span>
            </div>
          </form>
        </>
      ) : (
        <div className="tweetCard-text">
          <h3 className="tweetCard-text__content">{tweet.text}</h3>
        </div>
      )}
      {attachmentURL && (
        <div className="tweetCard-attachment">
          <img
            className="tweetCard-attachment__img"
            src={attachmentURL}
            alt=""
          />
        </div>
      )}
      {ownerOptions()}
    </div>
  );
}
