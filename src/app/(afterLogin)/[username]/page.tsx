import React from "react";
import BackButton from "./_component/BackButton";
import ve from "./profilePage.css";
import UserProfile from "./_component/UserProfile";
import ProfileTab from "./_component/ProfileTab";

const ProfilePage = () => {
  const profile = {
    name: "hong",
    posts: "0",
    id: "devhong12421",
  };
  return (
    <div className={ve.profileWrapper}>
      <div className={ve.header}>
        <BackButton />
        <div>
          <span className={ve.metaName}>{profile.name}</span>
          <br />
          <span className={ve.posts}>{profile.posts} 게시물</span>
        </div>
      </div>

      <UserProfile />

      <ProfileTab />
    </div>
  );
};

export default ProfilePage;
