import React from "react";
import ve from "./recommendFollow.css";
import Avatar, { AvatarProps } from "@/components/uis/avatar/Avatar";
import Button from "@/components/uis/atoms/Button";
import Link from "next/link";

type RecommendFollowProps = AvatarProps & {};

const RecommendFollow = ({ src, name, id }: RecommendFollowProps) => {
  return (
    <Link href={`/${id}`}>
      <div className={ve.wrapper}>
        <Avatar src={src} name={name} id={id} />
        <Button variant="outlined" className={ve.button}>
          팔로우
        </Button>
      </div>
    </Link>
  );
};

export default RecommendFollow;
