import Image from "next/image";
import React from "react";
import ve from "./userProfile.css";
import Button from "@/components/uis/atoms/Button";
import type { User } from "@/types/User";

interface UserProfileProps {
  profile: User;
}

const UserProfile = ({ profile }: UserProfileProps) => {
  return (
    <div>
      <div className={ve.garyBg}>
        <Image
          src={profile.image}
          width={135}
          height={135}
          alt="profile image"
          quality={100}
          className={ve.profileImageWrapper}
        />
      </div>
      <div className={ve.profileWrapper}>
        <div className={ve.profileSettingButtonWrapper}>
          {/* FIXME:배경색이 없는 버튼 구현 필요. */}
          <Button className={ve.profileSettingButton}>프로필 설정하기</Button>
        </div>
      </div>
      <div className={ve.userMetaInfo}>
        <p className={ve.userName}>{profile.nickName}</p>
        <p className={ve.userId}>@{profile.id}</p>
      </div>
    </div>
  );
};

export default UserProfile;
