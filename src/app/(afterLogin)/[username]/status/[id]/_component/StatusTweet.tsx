import React from "react";
import ve from "./statusTweet.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import Comment from "@/components/icons/Comment";
import Button from "@/components/uis/atoms/Button";
import ReTweet from "@/components/icons/ReTweet";
import Heart from "@/components/icons/Heart";
import Views from "@/components/icons/Views";
import Avatar from "@/components/uis/avatar/Avatar";
import ActionButtons from "@/components/uis/modules/actionButtons/ActionButtons";
import Tweet from "@/app/(afterLogin)/home/_components/Tweet";

dayjs.extend(relativeTime);
dayjs.locale(ko);

// FIXME:
const tweetInfo = {
  name: "TVING티빙",
  id: "tvingdotcom",
  image: "/default_profile_normal.png",
  writeTime: 1713762611302,
};

interface StatusTweetProps {
  isWhite?: boolean;
}

const StatusTweet = ({ isWhite }: StatusTweetProps) => {
  return (
    <div className={`${ve.wrapper} ${isWhite && ve.whiteColor}`}>
      <div className={ve.articleHeader}>
        <Avatar
          src={tweetInfo.image}
          id={tweetInfo.id}
          name={tweetInfo.name}
          rounded
          isLink
        />
        <Button className={ve.followButton}>팔로우</Button>
      </div>
      <div className={ve.contentWrapper}>
        <div className={ve.tweetContent}>
          {/* tweetContent */}
          <div>
            여고추리반3
            <br />
            <br />
            평점 114214/141
            <br />
            <br />
            출연진들의 찐 반응을..
            <br />
            미스터리 어드벤처
          </div>

          <div className={ve.createAt}>
            {dayjs(tweetInfo.writeTime).format("A h:mm · YYYY년 M월 D일")}
          </div>

          <ActionButtons isWhite />
        </div>
      </div>
    </div>
  );
};

export default StatusTweet;
