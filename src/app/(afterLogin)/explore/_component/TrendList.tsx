"use client";
import React from "react";
import ve from "./trendList.css";
import { useQuery } from "@tanstack/react-query";
import type { ITrend } from "../../_component/Trend";
import getTrends from "../../_lib/getTrends";
import Trend from "../../_component/Trend";

const TrendList = () => {
  const { data: trends } = useQuery<ITrend[]>({
    queryFn: getTrends,
    queryKey: ["trends"],
  });

  return (
    <div className={ve.wrapper}>
      <>
        {/* trendList */}
        {trends?.map((trend) => (
          <Trend locale="한국" trend={trend} key={trend.trendId} />
        ))}
      </>
    </div>
  );
};

export default TrendList;
