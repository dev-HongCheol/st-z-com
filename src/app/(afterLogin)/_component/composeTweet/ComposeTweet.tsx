"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "@/components/uis/modal/Modal";
import closeBtnImg from "@/assets/closeBtn.svg";
import Image from "next/image";
import Button from "@/components/uis/atoms/Button";
import ve from "./composeTweet.css";
import Link from "next/link";
import MediaUpload from "@/components/icons/MediaUpload";
import GifUpload from "@/components/icons/GifUpload";
import { useRouter } from "next/navigation";

// FIXME: TESTCODE
const me = {
  src: "/default_profile_normal.png",
};

const ComposeTweet = () => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaInput = useRef<HTMLInputElement>(null);
  const handleUploadMedia = () => {
    mediaInput.current?.click();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("🚀  file: Login.tsx:21  onSubmit  event_", event);
    console.log("1111", textareaRef.current?.value, textareaRef.current?.value);
  };

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
  };
  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsSubmitDisabled(event.target.value.length === 0);
  };

  const onClose = () => router.back();

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto"; // Reset height to auto to recalculate
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  };

  return (
    <Modal className={ve.modalWrapper}>
      {/* header */}
      <div className={ve.modalHeader}>
        <Button variant="text" className={ve.closeBtn} onClick={onClose}>
          <Image src={closeBtnImg} alt="close btn" />
        </Button>
      </div>

      <form className={ve.tweetForm} onSubmit={onSubmit}>
        <div className={ve.contextWrapper}>
          <div className={ve.avatarImageWrapper}>
            <Image
              src={me.src}
              alt="profileImage"
              fill
              className={ve.avatarImage}
            />
          </div>
          <div className={ve.textareaWrapper}>
            <textarea
              className={ve.formTextarea}
              placeholder="무슨 일이 일어나고 있나요?"
              onInput={adjustTextareaHeight}
              ref={textareaRef}
              onChange={onChangeTextarea}
            />
          </div>
        </div>
        <span>
          <Link href={"#"}>모든 사람에게 보일 수 있습니다.</Link>
        </span>
        <hr className={ve.hr} />
        <div className={ve.actionButtons}>
          <div className={ve.uploadContentBtnWrapper}>
            <Button
              variant="text"
              className={ve.contentUploadBtn}
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
            <Button variant="text" className={ve.contentUploadBtn} title="GIF">
              <GifUpload />
            </Button>
          </div>
          <div>
            <Button
              className={ve.submitButton}
              type="submit"
              disabled={isSubmitDisabled}
            >
              게시하기
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ComposeTweet;
