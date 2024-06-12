"use client";
import React from "react";
import ve from "./recommendFollowList.css";
import RecommendFollow from "./RecommendFollow";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import getFollowRecommends from "../_lib/getFollowRecommends";
import type { User } from "@/types/User";

const RecommendFollowList = () => {
  const { data: followRecommends } = useQuery<User[]>({
    queryFn: getFollowRecommends,
    queryKey: ["users", "followRecommends"],
  });

  return (
    <div className={ve.wrapper}>
      <div className={ve.title}>
        <h3>팔로우 추천</h3>
      </div>
      <>
        {followRecommends?.map((followRecommend) => (
          <RecommendFollow user={followRecommend} key={followRecommend.id} />
        ))}
      </>
      <Link href={"#"}>더보기</Link>
    </div>
  );
};

export default RecommendFollowList;
