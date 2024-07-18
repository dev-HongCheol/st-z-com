import ComposeTweet from "@/app/(afterLogin)/_component/composeTweet/ComposeTweet";
import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) return null;
  return <ComposeTweet session={session} />;
};

export default page;
