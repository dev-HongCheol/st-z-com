import React from "react";
import ve from "./tweet.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import TweetWrapper, { type Post } from "./TweetWrapper";
import { faker } from "@faker-js/faker";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface TweetProps {
  isPhoto?: boolean;
  post: Post;
  isNoneBorder?: boolean;
}

const Tweet = ({ isPhoto, post, isNoneBorder }: TweetProps) => {
  const getImageCss = (imageLength: number, index: number) => {
    switch (imageLength) {
      case 1: {
        return ve.image1;
      }
      case 2: {
        return ve.image2;
      }
      case 3: {
        if (index === 0) return ve.image3First;
        return ve.image3;
      }
      case 4: {
        return ve.image4;
      }
    }
  };

  const get3GridImage = (imageLength: number, index: number) => {
    if (imageLength === 3 && index === 0) return ve.image3Grid;
    return "";
  };
  return (
    <TweetWrapper post={post}>
      <div
        className={`${ve.wrapper} ${isPhoto && ve.colorWhite} ${
          isNoneBorder && ve.noneBorder
        }`}
      >
        <div className={ve.avatar}>
          <Image src={post.User.image} alt="profile" width={40} height={40} />
        </div>
        <div className={ve.tweetContent}>
          <div className={ve.tweetUserWrapper}>
            <div className={ve.tweetInfo}>
              <div className={ve.userName}>
                <Link href={`/${post.User.id}`}>{post.User.nickname}</Link>
              </div>
              <div className={ve.userId}>
                <Link href={`/${post.User.id}`}>@{post.User.id}</Link>
              </div>

              <span className={ve.dot}>·</span>
              <div className={ve.userId}>{dayjs(post.createAt).fromNow()}</div>
            </div>
          </div>
          {/* content */}
          <div>{post.content}</div>
          <div className={ve.imageWrapper}>
            {post.Images.map((image, index) => (
              <Link
                key={image.imageId}
                href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
                scroll={false}
                className={get3GridImage(post.Images.length, index)}
              >
                <div
                  className={`${getImageCss(post.Images.length, index)} ${
                    isPhoto ? ve.statusImage : ""
                  }`}
                >
                  <Image src={image.link} alt="image" fill sizes="600px" />
                </div>
              </Link>
            ))}
          </div>

          <ActionButtons isWhite={isPhoto} />
        </div>
      </div>
    </TweetWrapper>
  );
};

export default Tweet;
