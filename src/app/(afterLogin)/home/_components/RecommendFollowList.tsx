import React from "react";
import ve from "./recommendFollowList.css";
import RecommendFollow from "./RecommendFollow";
import Link from "next/link";

// FIXME:TESTCODE
const follow = {
  src: "/iiLLo4_n_normal.jpg",
  id: "tvingdotcom",
  name: "TVING티빙",
};

const RecommendFollowList = () => {
  return (
    <div className={ve.wrapper}>
      <div className={ve.title}>
        <h3>팔로우 추천</h3>
      </div>
      <>
        <RecommendFollow src={follow.src} id={follow.id} name={follow.name} />
        <RecommendFollow src={follow.src} id={follow.id} name={follow.name} />
        <RecommendFollow src={follow.src} id={follow.id} name={follow.name} />
      </>
      <Link href={"#"}>더보기</Link>
    </div>
  );
};

export default RecommendFollowList;
