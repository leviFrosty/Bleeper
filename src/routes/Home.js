import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db } from "fbInstance";
import { v4 as uuidV4 } from "uuid";
import TweetCard from "../components/TweetCard";
import { storage } from "../fbInstance";

export default function Home({ userObj }) {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [processing, setProcessing] = useState(false);

  // console.log(userObj);
  // TODO: Add profile creation screen after signin to fill out displayname, img, etc.

  const tweetData = {
    text: tweet,
    email: userObj.email,
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

  useEffect(() => {
    const dbCollection = collection(db, "tweets");
    onSnapshot(dbCollection, (snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  return (
    <div className="home">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          required
          placeholder="What's on your mind?"
          value={tweet}
        />
        <span>{tweet.length}</span>
        <span>/140</span>
        <input
          className="tweetForm-imageInput"
          type="file"
          accept="image/*"
          onChange={onAddAttachment}
        />
        {processing && <div>Processing image...</div>}
        {attachment && <button onClick={onClearAttachment}>Cancel</button>}
        <button type="submit">Tweet</button>
        {attachment && (
          <div>
            <img src={attachment} alt="" />
            <button onClick={onClearAttachment}>X</button>
          </div>
        )}
      </form>
      <div>
        {tweets.map((tweet) => {
          return (
            <TweetCard
              attachmentURL={tweet.attachmentURL}
              key={tweet.id}
              tweet={tweet}
              isOwner={userObj.uid === tweet.creatorId}
            />
          );
        })}
      </div>
    </div>
  );
}
