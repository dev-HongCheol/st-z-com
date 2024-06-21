"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import ve from "./userProfile.css";
import Button from "@/components/uis/atoms/Button";
import type { User } from "@/types/User";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFollow, postFollow } from "../../_lib/follow";

interface UserProfileProps {
  profile: User;
}

const UserProfile = ({ profile }: UserProfileProps) => {
  const { data: session } = useSession();
  const isFollowed = useMemo(() => {
    return !!profile.Followers?.find(
      (follower) => follower.userId === session?.user.id
    );
  }, [session?.user.id, profile.Followers]);
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: postFollow,
    onMutate() {
      console.log(111);
      const profileQueryData: User | undefined = queryClient.getQueryData([
        "user",
        profile.id,
      ]);

      const newProfileQueryData = structuredClone(profileQueryData);
      console.log("🚀 _ onMutate _ newProfileQueryData:", newProfileQueryData);
      if (!newProfileQueryData) return;

      newProfileQueryData?.Followers.push({
        userId: session?.user.id as string,
      });
      newProfileQueryData._count.Followers =
        newProfileQueryData._count.Followers + 1;
      queryClient.setQueryData(["user", profile.id], newProfileQueryData);
    },
  });

  const unFollowMutation = useMutation({
    mutationFn: deleteFollow,
    onMutate() {
      const profileQueryData: User | undefined = queryClient.getQueryData([
        "user",
        profile.id,
      ]);
      const newProfileQueryData = structuredClone(profileQueryData);
      if (!newProfileQueryData) return;

      newProfileQueryData.Followers = newProfileQueryData?.Followers.filter(
        (follow) => follow.userId !== session?.user.id
      );

      newProfileQueryData._count.Followers =
        newProfileQueryData._count.Followers - 1;
      queryClient.setQueryData(["user", profile.id], newProfileQueryData);
    },
  });

  const handleToggleFollow = () => {
    console.log("🚀 _ handleToggleFollow _ isFollowed:", isFollowed);
    isFollowed
      ? unFollowMutation.mutate(profile.id)
      : followMutation.mutate(profile.id);
  };

  return (
    <div>
      <div className={ve.garyBg}>
        <Image
          src={profile.image}
          width={135}
          height={135}
          alt="profile image"
          quality={100}
          className={ve.profileImageWrapper}
        />
      </div>
      <div className={ve.profileWrapper}>
        <div className={ve.profileSettingButtonWrapper}>
          {/* FIXME:배경색이 없는 버튼 구현 필요. */}
          <Button className={ve.profileSettingButton}>프로필 설정하기</Button>

          {profile.id !== session?.user.id && (
            <Button
              className={ve.profileSettingButton}
              onClick={handleToggleFollow}
            >
              {isFollowed ? "팔로잉" : "팔로우"}
            </Button>
          )}
        </div>
      </div>
      <div className={ve.userMetaInfo}>
        <p className={ve.userName}>{profile.nickName}</p>
        <p className={ve.userId}>@{profile.id}</p>
      </div>
    </div>
  );
};

export default UserProfile;
