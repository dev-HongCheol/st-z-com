"use client";
import React, { FormEvent, useMemo, useRef, useState } from "react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const mediaInput = useRef<HTMLInputElement>(null);
  const handleUploadMedia = () => {
    mediaInput.current?.click();
  };

  const handleFocusTextarea = () => {
    setIsClickedTextarea(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
  };

  function adjustTextareaHeight() {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto"; // Reset height to auto to recalculate
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  }

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsSubmitDisabled(event.target.value.length === 0);
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
          ref={textareaRef}
          onChange={onChangeTextarea}
          onInput={adjustTextareaHeight}
        />
        {isClickedTextarea && (
          <Link href={"#"} className={comment}>
            모든 사람들이 답글을 달 수 있습니다.
          </Link>
        )}
        <hr className={divider} />
        <div className={btns}>
          <div className={uploadContentBtnWrapper}>
            <Button
              variant="text"
              className={contentUploadBtn}
              title="미디어"
              onClick={handleUploadMedia}
            >
              <MediaUpload />
            </Button>
            <input
              type="file"
              hidden
              name="media"
              multiple
              accept="image/*"
              ref={mediaInput}
            />
            <Button variant="text" className={contentUploadBtn} title="GIF">
              <GifUpload />
            </Button>
          </div>
          <div>
            <Button
              className={submitButton}
              type="submit"
              disabled={isSubmitDisabled}
            >
              게시하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteForm;
