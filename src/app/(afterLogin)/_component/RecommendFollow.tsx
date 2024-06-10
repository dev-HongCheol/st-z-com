import type React from "react";
import ve from "./recommendFollow.css";
import Avatar, { type AvatarProps } from "@/components/uis/avatar/Avatar";
import Button from "@/components/uis/atoms/Button";
import Link from "next/link";
import type { User } from "@/types/User";
import { useMutation } from "@tanstack/react-query";

type RecommendFollowProps = {
  user: User;
};

const RecommendFollow = ({ user }: RecommendFollowProps) => {
  const mutation = useMutation({
    mutationFn: async (userId: string) => {
      const res = fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        { method: "post", credentials: "include" }
      );
    },
  });
  const handleFollow = (event: React.MouseEvent, userId: string) => {
    event.preventDefault();
    mutation.mutate(userId);
  };

  return (
    <Link href={`/${user.id}`}>
      <div className={ve.wrapper}>
        <Avatar src={user.image} nickName={user.nickName} id={user.id} />
        <Button
          variant="outlined"
          className={ve.button}
          onClick={(event: React.MouseEvent) => handleFollow(event, user.id)}
        >
          팔로우
        </Button>
      </div>
    </Link>
  );
};

export default RecommendFollow;
