import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "fbInstance";
import TweetCard from "../components/home/TweetCard";
import TweetForm from "components/home/TweetForm";

export default function Home({ userObj }) {
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    const tweetCollection = collection(db, "tweets");
    const q = await query(tweetCollection, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  return (
    <div className="home">
      <div className="home-title__container">
        <h1 className="home-title__heading">Home</h1>
        <i className="fas fa-home home-title__icon"></i>
      </div>
      <TweetForm userObj={userObj} />
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
