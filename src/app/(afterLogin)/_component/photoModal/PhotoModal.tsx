//FIXME:

"use client";

import React, { useEffect } from "react";
import ve from "./photoModal.css";
import Image from "next/image";
import { Post } from "../../home/_components/TweetWrapper";
import { faker } from "@faker-js/faker";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import CloseButton from "./CloseButton";
import StatusTweet from "../../[username]/status/[id]/_component/StatusTweet";
import CommentForm from "../../[username]/status/[id]/_component/CommentForm";
import Tweet from "../../home/_components/Tweet";

type ModalProps = {};
const PhotoModal = () => {
  const post: Post = {
    postId: 1,
    User: {
      id: "tving124",
      nickname: "TVING티빙",
      image: "/iiLLo4_n_normal.jpg",
    },
    createAt: new Date(),
    Images: [],
    content: faker.lorem.text(),
  };

  post.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";

    return () => {
      if (body) body.style.overflow = "initial";
    };
  }, []);
  return (
    <div className={ve.modal}>
      <div className={ve.wrapper}>
        {/* image */}
        <div className={ve.imageWrapper}>
          <div className={ve.header}>
            <CloseButton />
          </div>
          <div className={ve.image}>
            {post.Images && post.Images.length && (
              <Image
                src={post.Images[0].link}
                alt=""
                width={500}
                height={400}
                priority
                sizes="500px"
              />
            )}
          </div>
          <div className={ve.actionButtonsWrapper}>
            <ActionButtons isWhite />
          </div>
        </div>
        {/* tweet */}
        <div className={ve.tweetWrapper}>
          <StatusTweet isWhite />
          <CommentForm isPhoto />
          <div>
            <Tweet isPhoto />
            <Tweet isPhoto />
            <Tweet isPhoto />
            <Tweet isPhoto />
            <Tweet isPhoto />
            <Tweet isPhoto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
