"use client";
import React, { ReactNode } from "react";
import {
  menuItem,
  menuItemLabel,
  menuItemLi,
  navIcon,
  selected,
} from "./menuList.css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export type MenuItemProps = {
  id: number;
  icon: string;
  label: string;
  href: string;
};

const MenuItem = ({ id, icon, label, href }: MenuItemProps) => {
  const loginSegment = useSelectedLayoutSegment();
  const isActive = href === loginSegment;
  // console.log("🚀 _ MenuItem _ loginSegment:", loginSegment, isActive);

  // const IconComponent = React.lazy(
  //   () => import(`@/components/icons/${isActive ? icon + "Fill" : icon}`)
  // );

  return (
    <li className={menuItemLi}>
      <Link href={href} className={menuItem}>
        <div className={navIcon}>{/* <IconComponent /> */}</div>
        <div className={`${menuItemLabel} ${isActive ? selected : ""}`}>
          {label}
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
