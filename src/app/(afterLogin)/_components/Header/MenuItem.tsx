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
import dynamic from "next/dynamic";

export type MenuItemProps = {
  id: number;
  icon: string;
  label: string;
  href: string;
};

const MenuItem = ({ id, icon, label, href }: MenuItemProps) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment}`;

  const IconComponent = dynamic(
    () => import(`@/components/icons/${isActive ? icon + "Fill" : icon}`),
    {
      ssr: false,
    }
  );

  return (
    <li className={menuItemLi}>
      <Link href={href} className={menuItem}>
        <div className={navIcon}>
          <IconComponent />
        </div>
        <div className={`${menuItemLabel} ${isActive ? selected : ""}`}>
          {label}
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
