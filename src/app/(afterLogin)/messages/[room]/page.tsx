import { auth } from "@/auth";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import getUser from "../../[username]/_lib/getUser";
import ReceiveUserProfile from "./_components/ReceiveUserProfile";

interface RoomPageProps {
  params: {
    room: string;
  };
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const session = await auth();
  const receiverId = params.room
    .split("-")
    .filter((userId) => userId !== session?.user.id)[0];
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["users", receiverId],
    queryFn: getUser,
  });

  return (
    <div>
      <ReceiveUserProfile receiverId={receiverId} />
    </div>
  );
};

export default RoomPage;
