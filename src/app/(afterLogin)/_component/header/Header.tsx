import LogoImage from "@/assets/logo.svg";
import Image from "next/image";
import React from "react";
import MenuList from "./MenuList";
import { header, logoImage, navWrapper } from "./header.css";
import Button from "@/components/uis/atoms/Button";
import LogoutButton from "../composeTweet/logoutButton/LogoutButton";

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
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
