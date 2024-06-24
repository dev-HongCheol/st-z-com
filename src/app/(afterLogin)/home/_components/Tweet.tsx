import type React from "react";
import ve from "./tweet.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import TweetWrapper, { type Post } from "./TweetWrapper";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import classNames from "classnames";
import ReTweetIcon from "@/components/icons/ReTweet";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface TweetProps {
  isPhoto?: boolean;
  post: Post;
  isNoneBorder?: boolean;
}

const Tweet = ({ isPhoto, post, isNoneBorder }: TweetProps) => {
  const cx = classNames.bind(ve);
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

  const handleLinkStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const postData = post.Original ? post.Original : post;
  return (
    <TweetWrapper post={postData}>
      {post.Original && (
        <div className={ve.rePostWrapper}>
          <ReTweetIcon /> <p>재게시했습니다.</p>
        </div>
      )}
      <div
        className={cx(
          ve.wrapper,
          isPhoto && ve.colorWhite,
          isNoneBorder && ve.noneBorder
        )}
      >
        <div className={ve.avatar}>
          <Image
            src={postData.User.image}
            alt="profile"
            width={40}
            height={40}
          />
        </div>
        <div className={ve.tweetContent}>
          <div className={ve.tweetUserWrapper}>
            <div className={ve.tweetInfo}>
              <div className={ve.userName}>
                <Link
                  href={`/${postData.User.id}`}
                  passHref
                  onClick={handleLinkStopPropagation}
                >
                  {postData.User.nickname}
                </Link>
              </div>
              <div className={ve.userId}>
                <Link
                  href={`/${postData.User.id}`}
                  onClick={handleLinkStopPropagation}
                >
                  @{postData.User.id}
                </Link>
              </div>

              <span className={ve.dot}>·</span>
              <div className={ve.userId}>
                {dayjs(postData.createAt).fromNow()}
              </div>
            </div>
          </div>
          {/* content */}
          <div>{postData.content}</div>
          <div className={ve.imageWrapper}>
            {postData.Images.map((image, index) => (
              <Link
                key={image.imageId}
                href={`/${postData.User.id}/status/${postData.postId}/photo/${image.imageId}`}
                className={get3GridImage(postData.Images.length, index)}
                onClick={handleLinkStopPropagation}
              >
                <div
                  className={`${getImageCss(postData.Images.length, index)} ${
                    isPhoto ? ve.statusImage : ""
                  }`}
                >
                  <Image src={image.link} alt="image" fill sizes="600px" />
                </div>
              </Link>
            ))}
          </div>

          <ActionButtons isWhite={isPhoto} post={postData} />
        </div>
      </div>
    </TweetWrapper>
  );
};

export default Tweet;
