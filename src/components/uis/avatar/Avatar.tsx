import React from "react";
import ve from "./avatar.css";
import Image from "next/image";
import Link from "next/link";

export type AvatarProps = {
  src: string;
  nickName: string;
  id: string;
  rounded?: boolean;
  isLink?: boolean;
};

const Avatar = ({
  src,
  nickName,
  id,
  rounded = false,
  isLink,
}: AvatarProps) => {
  return (
    <div className={ve.wrapper}>
      <div className={ve.ImgWrapper}>
        {isLink ? (
          <Link href={`/${id}`}>
            <Image
              src={src}
              alt="profileImage"
              fill
              className={rounded ? ve.rounded : ""}
              sizes="(max-width: 768px) 40px, 40px"
              quality={100}
            />
          </Link>
        ) : (
          <Image
            src={src}
            alt="profileImage"
            fill
            className={rounded ? ve.rounded : ""}
            sizes="(max-width: 768px) 40px, 40px"
            quality={100}
          />
        )}
      </div>
      <div className={ve.text}>
        <div className={ve.name}>
          {isLink ? <Link href={`/${id}`}>{nickName}</Link> : <>{nickName}</>}
        </div>
        <div className={ve.id}>
          <div className={ve.name}>
            {isLink ? <Link href={`/${id}`}>@{id}</Link> : <>@{id}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
