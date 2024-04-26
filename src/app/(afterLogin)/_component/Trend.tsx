import React from "react";
import ve from "./trend.css";

type TrendProps = {
  locale: string;
  trendName: string;
  posts?: number;
};

const Trend = ({ locale, trendName, posts = 0 }: TrendProps) => {
  return (
    <div className={ve.wrapper} tabIndex={0}>
      <div className={ve.header}>
        <div>{locale}에서 트렌드 중</div>
      </div>
      <div className={ve.trendName}>{trendName}</div>
      {posts !== 0 && <div>{posts.toLocaleString()} posts</div>}
    </div>
  );
};

export default Trend;
