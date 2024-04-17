import LogoImage from "@/assets/logo.svg";
import Image from "next/image";

import React from "react";
import MenuList from "./MenuList";
import { header, logoImage } from "./header.css";
import Button from "@/components/uis/atoms/Button";

const Header = () => {
  return (
    <header className={header}>
      <Button variant="text" className={logoImage}>
        <Image src={LogoImage} alt="logo" width={26} height={24} />
      </Button>
      <MenuList />
    </header>
  );
};

export default Header;
