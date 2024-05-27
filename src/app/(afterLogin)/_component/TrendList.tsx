"use client";
import React from "react";
import Trend from "./Trend";
import ve from "./trendList.css";
import Link from "next/link";

import { useSession } from "next-auth/react";

const TrendList = () => {
  const { data: session } = useSession();

  return (
    <div className={ve.wrapper}>
      {session?.user ? (
        <>
          <div className={ve.title}>
            <h3>나를 위한 트렌드</h3>
            <div className={ve.badge}>Beta</div>
          </div>
          {/* trendList */}
          <>
            <Trend locale="한국" trendName="하이브의 죄악" posts={100124} />
            <Trend locale="한국" trendName="노는언니" />
            <Trend locale="한국" trendName="하이브의 죄악" posts={100124} />
            <Trend locale="한국" trendName="노는언니" />
            <Trend locale="한국" trendName="하이브의 죄악" posts={100124} />
            <Trend locale="한국" trendName="노는언니" />
            <Trend locale="한국" trendName="하이브의 죄악" posts={100124} />
            <Trend locale="한국" trendName="노는언니" />
            <Trend locale="한국" trendName="하이브의 죄악" posts={100124} />
            <Trend locale="한국" trendName="노는언니" />
          </>
          <Link href={"#"}>더보기</Link>
        </>
      ) : (
        <div className={ve.noTrend}>트렌드를 가져올 수 없습니다.</div>
      )}
    </div>
  );
};

export default TrendList;
