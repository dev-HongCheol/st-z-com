"use client";

import type React from "react";
import ve from "./recommendFollow.css";
import Avatar from "@/components/uis/avatar/Avatar";
import Button from "@/components/uis/atoms/Button";
import Link from "next/link";
import type { User } from "@/types/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFollow, postFollow } from "../_lib/follow";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import classNames from "classnames";

type RecommendFollowProps = {
  user: User;
};

const RecommendFollow = ({ user }: RecommendFollowProps) => {
  const cx = classNames.bind(ve);
  // console.log("🚀 _ RecommendFollow _ user:", user);
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const isFollowed = useMemo(() => {
    const isFollowed = !!user.Followers.find(
      (follow) => follow.userId === session?.user.id
    );
    return isFollowed;
  }, [session?.user.id, user.Followers]);

  const followMutation = useMutation({
    mutationFn: postFollow,
    onMutate() {
      const followData: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);

      const cloneFollowData = structuredClone(followData);
      if (!cloneFollowData) return;
      const followingUser = cloneFollowData?.find(
        (follow) => follow.id === user.id
      );
      if (!followingUser) return;
      followingUser.Followers.push({ userId: session?.user.id as string });
      followingUser._count.Followings = followingUser._count.Followings + 1;
      queryClient.setQueryData(["users", "followRecommends"], cloneFollowData);
    },
    onError() {},
  });

  const unFollowMutation = useMutation({
    mutationFn: deleteFollow,
    onMutate() {
      const followData: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);

      const cloneFollowData = structuredClone(followData);
      if (!cloneFollowData) return;
      const followingUser = cloneFollowData?.find(
        (follow) => follow.id === user.id
      );
      if (!followingUser) return;
      followingUser.Followers = followingUser.Followers.filter(
        (follower) => follower.userId !== (session?.user.id as string)
      );
      followingUser._count.Followings = followingUser._count.Followings - 1;
      queryClient.setQueryData(["users", "followRecommends"], cloneFollowData);
    },
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
