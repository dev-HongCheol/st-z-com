"use client";
import React, { useContext } from "react";
import { HomeContext } from "./Provider";
import TweetList from "./TweetList";
import FollowingList from "./FollowingList";

const TabDivider = () => {
  const { tab } = useContext(HomeContext);
  console.log("🚀 _ TabDivider _ tab:", tab);
  return tab === "recommended" ? <TweetList /> : <FollowingList />;
};

export default TabDivider;
