"use client";
import React, { useContext } from "react";
import { HomeContext } from "./Provider";
import TweetList from "./TweetList";
import FollowingList from "./FollowingList";

const TabDivider = () => {
  const { tab } = useContext(HomeContext);
  return tab === "recommended" ? <TweetList /> : <FollowingList />;
};

export default TabDivider;
