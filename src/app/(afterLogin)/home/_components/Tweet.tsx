import React from "react";
import vx from "./tweet.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import TweetWrapper, { Post } from "./TweetWrapper";
import { faker } from "@faker-js/faker";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import { style } from "@vanilla-extract/css";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface TweetProps {
  isPhoto: boolean;
}

const Tweet = ({ isPhoto }: TweetProps) => {
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

  if (Math.random() > 0.5) {
    post.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
  }
  return (
    <TweetWrapper post={post}>
      <div className={`${vx.wrapper} ${isPhoto && vx.colorWhite}`}>
        <div className={vx.avatar}>
          <Image src={post.User.image} alt="profile" width={40} height={40} />
        </div>
        <div className={vx.tweetContent}>
          <div className={vx.tweetUserWrapper}>
            <div className={vx.tweetInfo}>
              <div className={vx.userName}>
                <Link href={`/${post.User.id}`}>{post.User.nickname}</Link>
              </div>
              <div className={vx.userId}>
                <Link href={`/${post.User.id}`}>@{post.User.id}</Link>
              </div>

              <span className={vx.dot}>·</span>
              <div className={vx.userId}>{dayjs(post.createAt).fromNow()}</div>
            </div>
          </div>
          {/* content */}
          <div>{post.content}</div>
          <div>
            {post.Images && post.Images.length > 0 && (
              <Link
                href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
                scroll={false}
              >
                <div className={`${vx.image} ${isPhoto && vx.statusImage}`}>
                  <Image
                    src={post.Images[0]?.link}
                    alt="image"
                    fill
                    sizes="600px"
                  />
                </div>
              </Link>
            )}
          </div>

          <ActionButtons isWhite={isPhoto} />
        </div>
      </div>
    </TweetWrapper>
  );
};

export default Tweet;
