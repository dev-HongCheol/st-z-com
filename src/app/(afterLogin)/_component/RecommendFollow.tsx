"use client";

import type React from "react";
import ve from "./recommendFollow.css";
import Avatar from "@/components/uis/avatar/Avatar";
import Button from "@/components/uis/atoms/Button";
import Link from "next/link";
import type { User } from "@/types/User";
import { useMutation } from "@tanstack/react-query";
import { deleteFollow, postFollow } from "../_lib/follow";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import classNames from "classnames";
const cx = classNames.bind(ve);
type RecommendFollowProps = {
  user: User;
};

const RecommendFollow = ({ user }: RecommendFollowProps) => {
  const { data: session } = useSession();
  const isFollowed = useMemo(() => {
    const isFollowed = !!user.Followers.find(
      (follow) => follow.userId === session?.user.id
    );
    return isFollowed;
  }, [session?.user.id, user.Followers]);

  const followMutation = useMutation({
    mutationFn: postFollow,
    onError() {},
  });

  const unFollowMutation = useMutation({
    mutationFn: deleteFollow,
    onError() {},
  });

  const handleFollow = (event: React.MouseEvent, userId: string) => {
    event.preventDefault();
    if (isFollowed) {
      unFollowMutation.mutate(userId);
    } else {
      followMutation.mutate(userId);
    }
  };

  return (
    <Link href={`/${user.id}`}>
      <div className={ve.wrapper}>
        <Avatar src={user.image} nickName={user.nickName} id={user.id} />
        <Button
          variant="outlined"
          className={cx(ve.button, isFollowed && ve.button1)}
          onClick={(event: React.MouseEvent) => handleFollow(event, user.id)}
        >
          {isFollowed ? "팔로잉" : "팔로우"}
        </Button>
      </div>
    </Link>
  );
};

export default RecommendFollow;
