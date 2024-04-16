import React, { ReactNode } from "react";
import { menuItem } from "./menuList.css";

type MenuItemProps = {
  id: number;
  icon: ReactNode;
  label: string;
  isActive: boolean;
};

const MenuItem = ({ id, icon, isActive, label }: MenuItemProps) => {
  return (
    <li className={menuItem}>
      <div>icon</div>
      <div>{label}</div>
    </li>
  );
};

const menuItems: MenuItemProps[] = [
  {
    id: 1,
    icon: "",
    label: "홈",
    isActive: false,
  },
  {
    id: 2,
    icon: "",
    label: "탐색기",
    isActive: false,
  },
  {
    id: 3,
    icon: "",
    label: "쪽지",
    isActive: false,
  },
  {
    id: 4,
    icon: "",
    label: "프로필",
    isActive: false,
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
            isActive={menuItem.isActive}
            label={menuItem.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
