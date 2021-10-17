import React from "react";

export default function TweetCard({ tweet, userObj }) {
  const handleOptions = () => {
    if (userObj.uid === tweet.creatorId) {
      return (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    }
  };

  return (
    <div>
      {tweet.text}
      <img src={tweet.userPhotoURL} alt={tweet.displayName} />
      {handleOptions()}
    </div>
  );
}
