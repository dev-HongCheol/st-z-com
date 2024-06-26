import React from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";
import Button from "@/components/uis/atoms/Button";
import { tweetBtn } from "./menuList.css";
import Link from "next/link";

const menuItems: MenuItemProps[] = [
  {
    id: 1,
    icon: "Home",
    label: "홈",
    href: "/home",
  },
  {
    id: 2,
    icon: "Explore",
    label: "탐색하기",
    href: "/explore",
  },
  {
    id: 3,
    icon: "Message",
    label: "쪽지",
    href: "/message",
  },
  {
    id: 4,
    icon: "Profile",
    label: "프로필",
    href: "/profile",
  },
];
const MenuList = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            icon={menuItem.icon}
            label={menuItem.label}
            href={menuItem.href}
          />
        ))}
      </ul>

      <Link href={"/compose/tweet"}>
        <Button className={tweetBtn}>게시하기</Button>
      </Link>
    </nav>
  );
};

export default MenuList;
