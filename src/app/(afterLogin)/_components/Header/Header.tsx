import LogoImage from "@/assets/logo.svg";
import Image from "next/image";

import React from "react";
import MenuList from "./MenuList";
import { header, logoImage, navWrapper, profileBtn } from "./header.css";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";

//FIXME: testCode
const me = {
  name: "devhong",
  id: "devhong1234",
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
          <Avatar src={me.image} id={me.id} name={me.name} rounded />
        </Button>
      </div>
    </header>
  );
};

export default Header;
