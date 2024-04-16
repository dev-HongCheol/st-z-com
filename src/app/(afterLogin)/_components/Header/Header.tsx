import LogoImage from "@/assets/logo.svg";
import Image from "next/image";

import React from "react";
import MenuList from "./MenuList";
import { header } from "./header.css";

const Header = () => {
  return (
    <header className={header}>
      <Image src={LogoImage} alt="logo" width={32} height={32} />
      <MenuList />
    </header>
  );
};

export default Header;
