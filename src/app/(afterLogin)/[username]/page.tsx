import React from "react";
import BackButton from "./_component/BackButton";
import ve from "./profilePage.css";
import UserProfile from "./_component/UserProfile";
import ProfileTab from "./_component/ProfileTab";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getUser from "./_lib/getUser";
import type { User } from "@/types/User";
import type { Post } from "../home/_components/TweetWrapper";
import getUserPosts from "./_lib/getUserPosts";
import PostList from "./_component/PostList";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const queryClient = new QueryClient();
  let profile: User | undefined;
  try {
    profile = await queryClient.fetchQuery<
      User,
      object,
      User,
      [string, string]
    >({
      queryKey: ["user", params.username],
      queryFn: getUser,
    });
  } catch (e) {
    console.log(e);
  }

  await queryClient.prefetchQuery<
    Post[],
    object,
    Post[],
    [string, string, string]
  >({
    queryFn: getUserPosts,
    queryKey: ["user", params.username, "getUserPosts"],
  });
  const dehydratedState = dehydrate(queryClient);

  if (!profile) {
    return (
      <div className={ve.profileWrapper}>
        <div className={ve.header}>
          <BackButton />
          <div>
            <span className={ve.metaName}>프로필</span>
          </div>
        </div>
        <div>
          <div>@{params.username}</div>
          <h4>계정이 존재하지 않음</h4>
        </div>
      </div>
    );
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={ve.profileWrapper}>
        <div className={ve.header}>
          <BackButton />
          <div>
            <span className={ve.metaName}>{profile?.nickName}</span>
            <br />
            {/* FIXME: */}
            <span className={ve.posts}>{99} 게시물</span>
          </div>
        </div>

        <UserProfile profile={profile} />

        <ProfileTab />
        <PostList username={params.username} />
      </div>
    </HydrationBoundary>
  );
};

export default ProfilePage;
