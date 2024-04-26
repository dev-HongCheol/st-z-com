import React from "react";
import BackButton from "./_component/BackButton";
import ve from "./profilePage.css";

const ProfilePage = () => {
  const profile = {
    name: "hong",
    posts: "0",
    id: "devhong12421",
  };
  return (
    <div>
      <div className={ve.header}>
        <BackButton />
        <div>
          <span className={ve.metaName}>{profile.name}</span>
          <br />
          <span className={ve.posts}>{profile.posts} 게시물</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
