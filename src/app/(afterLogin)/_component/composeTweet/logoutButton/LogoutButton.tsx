"use client";
import React from "react";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";
import ve from "./logoutButton.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";

interface LogoutButtonProps {
  user: User;
}

const LogoutButton = ({ user }: LogoutButtonProps) => {
  const router = useRouter();
  const handleLogout = () => {
    signOut({
      redirect: false,
    });
    router.replace("/");
  };
  if (!user) return;

  return (
    <Button className={ve.profileBtn} variant="text" onClick={handleLogout}>
      <Avatar
        src={user.image as string}
        id={user.id as string}
        nickName={user.nickname as string}
        rounded
      />
    </Button>
  );
};

export default LogoutButton;
