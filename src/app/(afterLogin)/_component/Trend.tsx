import React from "react";
import ve from "./trend.css";
import Link from "next/link";

export interface ITrend {
  title: string;
  count?: number;
}

type TrendProps = {
  locale: string;
  trend: ITrend;
};

const Trend = ({ locale, trend }: TrendProps) => {
  return (
    <Link href={`/search?q=${encodeURIComponent(trend.title)}`}>
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
      <div className={ve.wrapper} tabIndex={0}>
        <div className={ve.header}>
          <div>{locale}에서 트렌드 중</div>
        </div>
        <div className={ve.trendName}>{trend.title}</div>
        {trend.count && <div>{trend.count.toLocaleString()} posts</div>}
      </div>
    </Link>
  );
};

export default Trend;
