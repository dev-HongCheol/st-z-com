import React from "react";
import vx from "./tweet.css";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
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
      <div>
        <div className={vx.tweetUserWrapper}>
          <div className={vx.userName}>{tweetInfo.userName}</div>
          <div className={vx.userId}>
            <Link href={`/${tweetInfo.id}`}>@{tweetInfo.id}</Link>
          </div>
          <span className={vx.dot}>·</span>
          <div className={vx.userId}>
            {dayjs(tweetInfo.writeTime).fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
