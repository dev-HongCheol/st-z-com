import React from "react";
import ve from "./avatar.css";
import Image from "next/image";

type AvatarProps = {
  src: string;
  name: string;
  id: string;
  rounded?: boolean;
};

const Avatar = ({ src, name, id, rounded = false }: AvatarProps) => {
  return (
    <div className={ve.wrapper}>
      <div className={ve.ImgWrapper}>
        <Image
          src={src}
          alt="profileImage"
          fill
          className={rounded ? ve.rounded : ""}
        />
      </div>
      <div className={ve.text}>
        <div className={ve.name}>{name}</div>
        <div>@{id}</div>
      </div>
    </div>
  );
};

export default Avatar;
