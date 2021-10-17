import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "fbInstance";
import TweetCard from "../components/TweetCard";

export default function Home({ userObj }) {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    const tweetsCollection = await collection(db, "tweets");
    const docs = await getDocs(tweetsCollection);
    docs.forEach((doc) => {
      const tweetsObject = {
        ...doc.data(),
        id: doc.id,
      };
      setTweets((prev) => [tweetsObject, ...prev]);
    });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const tweetData = {
    text: tweet,
    displayName: userObj.displayName,
    email: userObj.email,
    userId: userObj.uid,
    userPhotoURL: userObj.photoURL,
    createdAt: Date.now(),
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
          return <TweetCard tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
