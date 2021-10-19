import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { auth, db } from "fbInstance";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import TweetCard from "components/TweetCard";

export default function Profile({ userObj }) {
  const [tweets, setTweets] = useState([]);
  let history = useHistory();
  const onSignoutClick = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
    history.push("/");
  };

  const getProfileTweets = async () => {
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
  };

  useEffect(() => {
    getProfileTweets();
  }, []);

  return (
    <div className="profile">
      <div>My Profile</div>
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
      <button onClick={onSignoutClick}>Sign out</button>
    </div>
  );
}
