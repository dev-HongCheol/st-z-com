import React from "react";
import vx from "./tweet.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import Comment from "@/components/icons/Comment";
import Button from "@/components/uis/atoms/Button";
import ReTweet from "@/components/icons/ReTweet";
import Heart from "@/components/icons/Heart";
import Views from "@/components/icons/Views";

dayjs.extend(relativeTime);
dayjs.locale(ko);

// FIXME:
const tweetInfo = {
  userName: "TVING티빙",
  id: "tvingdotcom",
  writeTime: 1713762611302,
};
const Tweet = () => {
  return (
    <div className={vx.wrapper}>
      <div className={vx.avatar}>
        <Image
          src={"/iiLLo4_n_normal.jpg"}
          alt="profile"
          width={40}
          height={40}
        />
      </div>
      <div className={vx.tweetContent}>
        <div className={vx.tweetUserWrapper}>
          <div className={vx.tweetInfo}>
            <div className={vx.userName}>{tweetInfo.userName}</div>
            <div className={vx.userId}>
              <Link href={`/${tweetInfo.id}`}>@{tweetInfo.id}</Link>
            </div>

            <span className={vx.dot}>·</span>
            <div className={vx.userId}>
              {dayjs(tweetInfo.writeTime).fromNow()}
            </div>
          </div>
          <div></div>
        </div>
        <div>
          여고추리반3
          <br />
          <br />
          평점 114214/141
          <br />
          <br />
          출연진들의 찐 반응을..
          <br />
          미스터리 어드벤처 <br />
          <br />
        </div>
        <div className={vx.buttonWrapper}>
          <div className={vx.button}>
            <Button variant="text" className={vx.widthAuto}>
              <Comment />
            </Button>
          </div>
          <div className={vx.button}>
            <Button variant="text" className={vx.widthAuto}>
              <ReTweet />
            </Button>
          </div>
          <div className={vx.button}>
            <Button variant="text" className={vx.widthAuto}>
              <Heart />
            </Button>
          </div>
          <div className={vx.button}>
            <Button variant="text" className={vx.widthAuto}>
              <Views />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
