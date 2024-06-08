import LogoImage from "@/assets/logo.svg";
import Image from "next/image";
import React from "react";
import MenuList from "./MenuList";
import { header, logoImage, navWrapper } from "./header.css";
import Button from "@/components/uis/atoms/Button";
import LogoutButton from "../composeTweet/logoutButton/LogoutButton";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className={header}>
      <div>
        <Button variant="text" className={logoImage}>
          <Image src={LogoImage} alt="logo" width={26} height={24} />
        </Button>
      </div>

      {session?.user && (
        <>
          <div className={navWrapper}>
            <MenuList />
          </div>
          <div>
            <LogoutButton user={session.user} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
