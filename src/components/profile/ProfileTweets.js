import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { db } from "fbInstance";
import { useState } from "react";
import TweetCard from "components/home/TweetCard";
import React, { useEffect } from "react";

export default function ProfileTweets({ userObj }) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getProfileTweets() {
      const docQuery = await query(
        collection(db, "tweets"),
        where("creatorId", "==", userObj.uid),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(docQuery);
      let tweetArray = [];
      if (snapshot.empty) {
        return (
          <div className="profile__noPosts">
            <h1>😞 No tweets yet...</h1>
          </div>
        );
      } else {
        snapshot.forEach((docSnapshot) => {
          const data = docSnapshot.data();
          tweetArray = [
            ...tweetArray,
            {
              id: docSnapshot.id,
              ...data,
            },
          ];
          setTweets(tweetArray);
        });
      }
    }
    getProfileTweets();
  }, [userObj.uid]);

  return (
    <div className="profile-tweets">
      <h2 className="profile-tweets__heading">Your tweets:</h2>
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
  );
}
