"use client";
import getUser from "@/app/(afterLogin)/[username]/_lib/getUser";
import type { User } from "@/types/User";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import ve from "./receiveUserProfile.css";

interface ReceiveUserProfileProps {
  receiverId: string;
}

const ReceiveUserProfile = ({ receiverId }: ReceiveUserProfileProps) => {
  const { data: receiver } = useQuery({
    queryKey: ["users", receiverId],
    queryFn: getUser,
  });

  return (
    <div className={ve.receiveUserProfileWrapper}>
      <div className={ve.avatarWrapper}>
        <Image src={receiver?.image as string} alt="receiver avatar" fill />
      </div>
      <p>{receiver?.nickname}</p>
      <p>@{receiver?.id}</p>
    </div>
  );
};

export default ReceiveUserProfile;
