import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "fbInstance";
import TweetCard from "../components/TweetCard";

export default function Home({ userObj }) {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const tweetData = {
    text: tweet,
    displayName: userObj.displayName,
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
    const dbCollection = collection(db, "tweets");
    await addDoc(dbCollection, tweetData).catch((error) => {
      alert("Error adding docuent. Check console for more information");
      console.log(error);
    });
    setTweet("");
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

  const handleDelete = async (tweetId) => {
    await deleteDoc(doc(db, "tweets", tweetId));
  };

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
        <button type="submit">Tweet</button>
      </form>
      <div>
        {tweets.map((tweet) => {
          return (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              isOwner={userObj.uid === tweet.creatorId}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
