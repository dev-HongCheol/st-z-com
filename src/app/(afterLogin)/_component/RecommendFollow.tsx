import React from "react";
import ve from "./recommendFollow.css";
import Avatar, { type AvatarProps } from "@/components/uis/avatar/Avatar";
import Button from "@/components/uis/atoms/Button";
import Link from "next/link";
import type { User } from "@/types/User";

type RecommendFollowProps = {
  user: User;
};

const RecommendFollow = ({ user }: RecommendFollowProps) => {
  return (
    <Link href={`/${user.id}`}>
      <div className={ve.wrapper}>
        <Avatar src={user.image} nickName={user.nickName} id={user.id} />
        <Button variant="outlined" className={ve.button}>
          팔로우
        </Button>
      </div>
    </Link>
  );
};

export default RecommendFollow;
