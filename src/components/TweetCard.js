import React from "react";

export default function TweetCard({ tweet, isOwner, handleDelete }) {
  const ownerOptions = () => {
    if (isOwner) {
      return (
        <div>
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
    }
  };

  return (
    <div>
      {tweet.text}
      <img src={tweet.userPhotoURL} alt={tweet.displayName} />
      {ownerOptions()}
    </div>
  );
}
