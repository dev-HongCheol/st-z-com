"use client";
import React from "react";
import Trend, { type ITrend } from "./Trend";
import ve from "./trendList.css";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import getTrends from "../_lib/getTrends";

const TrendList = () => {
  const { data: session } = useSession();
  const { data: trends } = useQuery<ITrend[]>({
    queryFn: getTrends,
    queryKey: ["trends"],
    enabled: !!session?.user,
  });

  return (
    <div className={ve.wrapper}>
      {session?.user ? (
        <>
          <div className={ve.title}>
            <h3>나를 위한 트렌드</h3>
            <div className={ve.badge}>Beta</div>
          </div>
          {/* trendList */}
          {trends?.map((trend) => (
            <Trend locale="한국" trend={trend} key={trend.trendId} />
          ))}

          <Link href={"#"}>더보기</Link>
        </>
      ) : (
        <div className={ve.noTrend}>트렌드를 가져올 수 없습니다.</div>
      )}
    </div>
  );
};

export default TrendList;
