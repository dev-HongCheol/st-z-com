"use client";
import React from "react";
import Button from "@/components/uis/atoms/Button";
import Avatar from "@/components/uis/avatar/Avatar";
import ve from "./logoutButton.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOut({
      redirect: false,
    });
    router.replace("/");
  };

  const { data } = useSession();
  if (data?.user) {
    return;
  }
  return (
    <Button className={ve.profileBtn} variant="text" onClick={handleLogout}>
      {data && (
        <Avatar
          src={data.user.image as string}
          id={data.user.id as string}
          nickName={data.user.nickname as string}
          rounded
        />
      )}
    </Button>
  );
};

export default LogoutButton;
