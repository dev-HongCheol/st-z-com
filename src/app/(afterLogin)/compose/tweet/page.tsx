import React from "react";
import ComposeTweet from "../../_component/composeTweet/ComposeTweet";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  if (!session) return null;
  return <ComposeTweet session={session} />;
};

export default page;
