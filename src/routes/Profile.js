import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { auth, db } from "fbInstance";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import TweetCard from "components/TweetCard";

export default function Profile({ userObj }) {
  const [tweets, setTweets] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState("");
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
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

  const onDisplayNameSubmit = (event) => {
    event.preventDefault();
    console.log(newDisplayName);
    setIsEditingDisplayName(false);
  };

  const onDisplayNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onDisplayNameEditToggle = () => {
    setIsEditingDisplayName(!isEditingDisplayName);
  };

  useEffect(() => {
    getProfileTweets();
  }, []);

  return (
    <div className="profile">
      <div className="profile-options">
        <div className="profile-displayName">
          <div>
            <h1>{userObj.displayName}</h1>
            <span onClick={onDisplayNameEditToggle}>
              <i class="fas fa-edit"></i>
            </span>
          </div>
          {isEditingDisplayName && (
            <div className="visually-hidden modal">
              <h2>Display name:</h2>
              <form onSubmit={onDisplayNameSubmit}>
                <input
                  required
                  maxLength={29}
                  type="text"
                  placeholder="Enter new name"
                  onChange={onDisplayNameChange}
                />
                <button type="submit">Save</button>
              </form>
            </div>
          )}
        </div>
        <button onClick={onSignoutClick}>Sign out</button>
      </div>
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
