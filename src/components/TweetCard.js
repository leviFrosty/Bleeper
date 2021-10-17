import React from "react";

export default function TweetCard({ tweet }) {
  return (
    <div key={tweet.id}>
      {tweet.text}
      <img src={tweet.userPhotoURL} alt={tweet.displayName} />
    </div>
  );
}
