import React, { useState } from "react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { storage } from "../../fbInstance";
import { db } from "fbInstance";

export default function TweetForm({ userObj }) {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const [processing, setProcessing] = useState(false);

  const tweetData = {
    text: tweet,
    creatorDisplayName: userObj.displayName,
    creatorId: userObj.uid,
    userPhotoURL: userObj.photoURL,
    createdAt: Date.now(),
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const imageInput = document.querySelector(".tweetForm-imageInput");
    let attachmentURL = "";
    if (attachment !== "") {
      const attachmentRef = await ref(storage, `${userObj.uid}/${uuidV4()}`);
      await uploadString(attachmentRef, attachment, "data_url");
      attachmentURL = await getDownloadURL(attachmentRef);
    }
    const dbCollection = collection(db, "tweets");
    const newTweet = {
      attachmentURL,
      ...tweetData,
    };
    await addDoc(dbCollection, newTweet).catch((error) => {
      alert("Error adding document. Check console for more information");
      console.log(error);
    });
    setTweet("");
    imageInput.value = null;
    setAttachment("");
  };

  const onAddAttachment = async (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        target: { result },
      } = finishedEvent;
      setAttachment(result);
      setProcessing(false);
    };
    reader.onprogress = (progress) => {
      setProcessing(true);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => {
    const imageInput = document.querySelector(".tweetForm-imageInput");
    console.dir(imageInput);
    imageInput.value = null;
    setAttachment(null);
  };
  return (
    <div className="tweetForm__container">
      <form className="tweetForm" onSubmit={onSubmit}>
        <div className="tweetForm-start">
          <img
            className="tweetForm__profileImg"
            src={userObj.photoURL}
            alt=""
          />
        </div>
        <div className="tweetForm-end">
          <div className="textInput__container">
            <input
              onChange={onChange}
              type="text"
              required
              maxLength={280}
              placeholder="What's on your mind?"
              className="tweetForm__textInput"
              value={tweet}
            />
            <div className="textInput__chars">
              <span>{tweet.length}</span>
              <span>/280</span>
            </div>
          </div>
          <div className="image-input__container">
            <div className="input-input-start">
              <label for="image-input">
                <i className="fas fa-file-image image-input__icon"></i>
              </label>
              <input
                id="image-input"
                className="tweetForm-imageInput"
                type="file"
                accept="image/*"
                onChange={onAddAttachment}
              />
              {processing && <div>Processing image...</div>}
              {attachment && (
                <div className="tweetForm-attachedImage">
                  <img
                    className="tweetForm-attachedImage__content"
                    src={attachment}
                    alt=""
                  />
                  <button
                    type="button"
                    className="tweetForm-attachedImage__deleteButton"
                    onClick={onClearAttachment}
                  >
                    <i className="fas fa-trash-alt "></i>
                  </button>
                </div>
              )}
            </div>
            <div className="input-input-end">
              <button className="tweetForm__submitButton" type="submit">
                Bleep
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
