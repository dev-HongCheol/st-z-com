"use client";
import { useRouter } from "next/navigation";
import React, { type ReactNode } from "react";

export interface Image {
  imageId: number;
  link: string;
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
    <article onClickCapture={() => handleDetailTweet(post)}>{children}</article>
  );
};

export default TweetWrapper;
