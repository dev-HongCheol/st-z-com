"use client";
import React from "react";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";
import ve from "./logoutButton.css";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { useQueryClient } from "@tanstack/react-query";

interface LogoutButtonProps {
  user: User;
}

const LogoutButton = ({ user }: LogoutButtonProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    signOut({
      redirect: false,
    });
    queryClient.clear();
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
      method: "post",
      credentials: "include",
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
