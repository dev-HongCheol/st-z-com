import LogoImage from "@/assets/logo.svg";
import Image from "next/image";

import React from "react";
import MenuList from "./MenuList";
import {
  header,
  logoImage,
  navWrapper,
  profileName,
  profileBtn,
  profileImg,
  profileImgWrapper,
  profileText,
  profileWrapper,
} from "./header.css";
import Button from "@/components/uis/atoms/Button";

//FIXME: testCode
const me = {
  name: "devhong",
  id: "@devhong1234",
  image: "/default_profile_normal.png",
};

const Header = () => {
  return (
    <header className={header}>
      <div className={navWrapper}>
        <Button variant="text" className={logoImage}>
          <Image src={LogoImage} alt="logo" width={26} height={24} />
        </Button>
        <MenuList />
      </div>
      <div>
        <Button className={profileBtn} variant="text">
          <div className={profileWrapper}>
            <div className={profileImgWrapper}>
              <Image
                className={profileImg}
                src={me.image}
                alt="profileImage"
                fill
              />
            </div>
            <div className={profileText}>
              <div className={profileName}>{me.name}</div>
              <div>{me.id}</div>
            </div>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
