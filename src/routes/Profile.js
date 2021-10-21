import React from "react";
import ProfileOptions from "components/profile/ProfileOptions";
import ProfileTweets from "components/profile/ProfileTweets";

export default function Profile({ userObj, refreshDisplayName }) {
  return (
    <div className="profile">
      <ProfileOptions
        userObj={userObj}
        refreshDisplayName={refreshDisplayName}
      />
      <ProfileTweets userObj={userObj} />
    </div>
  );
}
