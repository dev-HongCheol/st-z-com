"use client";
import React, { FormEvent, useState } from "react";
import {
  avatar,
  avatarImage,
  btns,
  formTextarea,
  submitButton,
  uploadContentBtnWrapper,
  contentUploadBtn,
  writeForm,
  writeFormWrapper,
  divider,
  comment,
} from "./writeForm.css";
import Image from "next/image";
import Button from "@/components/uis/atoms/Button";
import MediaUpload from "@/components/icons/MediaUpload";
import GifUpload from "@/components/icons/GifUpload";
import Link from "next/link";

//FIXME: testCode
const me = {
  name: "devhong",
  image: "/default_profile_normal.png",
};

const WriteForm = () => {
  const [isClickedTextarea, setIsClickedTextarea] = useState(false);

  const handleFocusTextarea = () => {
    setIsClickedTextarea(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
  };

  return (
    <div className={writeFormWrapper}>
      <div className={avatar}>
        <Image
          src={me.image}
          alt="profileImage"
          className={avatarImage}
          width={40}
          height={40}
        />
      </div>
      <form className={writeForm} onSubmit={handleSubmit}>
        <textarea
          className={formTextarea}
          placeholder="무슨 일이 있어나고 있나요?"
          onFocus={handleFocusTextarea}
        />
        {isClickedTextarea && (
          <Link href={"#"} className={comment}>
            모든 사람들이 답글을 달 수 있습니다.
          </Link>
        )}
        <hr className={divider} />
        <div className={btns}>
          <div className={uploadContentBtnWrapper}>
            <Button variant="text" className={contentUploadBtn} title="미디어">
              <MediaUpload />
            </Button>
            <Button variant="text" className={contentUploadBtn} title="GIF">
              <GifUpload />
            </Button>
          </div>
          <div>
            <Button className={submitButton} type="submit">
              게시하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
