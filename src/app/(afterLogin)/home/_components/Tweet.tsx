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
      <div className={vx.tweetContent}>
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
        <div>
          트윗 내용입니다 뭐든 써보세요.
          <br />
          sfasf
        </div>
        <div className={vx.buttonWrapper}>
          <div className={vx.button}>댓글</div>
          <div className={vx.button}>트륏</div>
          <div className={vx.button}>하트</div>
          <div className={vx.button}>조회수</div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
