"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import ve from "./userProfile.css";
import Button from "@/components/uis/atoms/Button";
import type { User } from "@/types/User";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFollow, postFollow } from "../../_lib/follow";
import getUser from "../_lib/getUser";
import useFollow from "../../_hooks/useFollowToggle";

interface UserProfileProps {
  profile: User;
  loginUserId: string | undefined;
}

const UserProfile = ({ profile, loginUserId }: UserProfileProps) => {
  const { data: session } = useSession();
  const { setFollowQueryData, setUnFollowQueryData } = useFollow(
    profile.id,
    loginUserId
  );
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: getUser,
    queryKey: ["users", profile.id],
  });

  const userQueryData: User | undefined = queryClient.getQueryData([
    "users",
    profile.id,
  ]);

  const isFollowed = useMemo(() => {
    if (userQueryData)
      return !!userQueryData.Followers.find(
        (follow) => follow.id === session?.user.id
      );
  }, [userQueryData, session?.user.id]);

  const followMutation = useMutation({
    mutationFn: postFollow,
    onMutate() {
      setFollowQueryData();
    },
  });

  const unFollowMutation = useMutation({
    mutationFn: deleteFollow,
    onMutate() {
      setUnFollowQueryData();
    },
  });

  const handleToggleFollow = () => {
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
          {profile.id === session?.user.id ? (
            <Button className={ve.profileSettingButton}>프로필 설정하기</Button>
          ) : (
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
