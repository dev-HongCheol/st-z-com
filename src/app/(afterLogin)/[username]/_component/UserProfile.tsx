import Image from "next/image";
import React from "react";
import ve from "./userProfile.css";
import Button from "@/components/uis/atoms/Button";

const UserProfile = () => {
  //FIXME: testCode
  const me = {
    name: "devhong",
    image: "/default_profile_400x400.png",
    id: "devhong124",
  };
  return (
    <div>
      <div className={ve.garyBg}>
        <Image
          src={me.image}
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
        <p className={ve.userName}>{me.name}</p>
        <p className={ve.userId}>@{me.id}</p>
      </div>
    </div>
  );
};

export default UserProfile;
