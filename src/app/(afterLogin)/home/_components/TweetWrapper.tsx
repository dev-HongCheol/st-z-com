"use client";
import { useRouter } from "next/navigation";
import React, { type ReactNode } from "react";

export interface Image {
  imageId: number;
  link: string;
}

export interface UserId {
  userId: string;
}

export interface Post {
  content: string;
  postId: number;
  User: {
    id: string;
    nickname: string;
    image: string;
  };
  createAt: Date;
  Images: Image[];
  Hearts: UserId[];
  Reposts: UserId[];
  Comments: UserId[];
  _count: {
    Hearts: number;
    Reposts: number;
    Comments: number;
  };
  Original?: Post;
  Parent?: Post;
}

interface TweetWrapperProps {
  children: ReactNode;
  post: Post;
}

const TweetWrapper = ({ children, post }: TweetWrapperProps) => {
  const router = useRouter();

  const handleDetailTweet = (post: Post) =>
    router.push(`/${post.User.id}/status/${post.postId}`);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <article onClick={() => handleDetailTweet(post)}>{children}</article>
  );
};

export default TweetWrapper;
