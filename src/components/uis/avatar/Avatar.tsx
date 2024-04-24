import React from "react";
import ve from "./avatar.css";
import Image from "next/image";

export type AvatarProps = {
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
          sizes="(max-width: 768px) 40px, 40px"
          quality={100}
        />
      </div>
      <div className={ve.text}>
        <div className={ve.name}>{name}</div>
        <div className={ve.id}>@{id}</div>
      </div>
    </div>
  );
};

export default Avatar;
