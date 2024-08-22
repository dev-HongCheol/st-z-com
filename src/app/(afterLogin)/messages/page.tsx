import React from "react";
import { getRooms } from "./_libs/getRooms";
import { auth } from "@/auth";

const page = async () => {
  const loginUser = await auth();
  console.log("sdfsf");
  const rooms = await getRooms(loginUser?.user.id as string);

  return <div>{JSON.stringify(rooms)}</div>;
};

export default page;
