"use client";
import type React from "react";
import { type FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/uis/atoms/Button";
import MediaUpload from "@/components/icons/MediaUpload";
import GifUpload from "@/components/icons/GifUpload";

import { usePathname } from "next/navigation";
import ve from "./commentForm.css";
import { useSession } from "next-auth/react";

interface CommentFormProps {
  isPhoto?: boolean;
}

const CommentForm = ({ isPhoto }: CommentFormProps) => {
  const pathname = (usePathname() || "").split("/");
  const postUserId = pathname[1];
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

  const { data: session } = useSession();

  return (
    <>
      <div className={ve.postUserId}>@{postUserId} 님에게 보내는 댓글</div>
      <div className={ve.wrapper}>
        <div className={ve.avatar}>
          <Image
            src={session?.user.image as string}
            alt="profileImage"
            className={ve.avatarImage}
            width={40}
            height={40}
          />
        </div>
        <form className={ve.writeForm} onSubmit={handleSubmit}>
          <textarea
            className={`${ve.formTextarea} ${isPhoto && ve.statusFormTextarea}`}
            placeholder="답글 게시하기"
            onFocus={handleFocusTextarea}
            ref={textareaRef}
            onChange={onChangeTextarea}
            onInput={adjustTextareaHeight}
          />

          {isClickedTextarea && (
            <div className={ve.btns}>
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
                <Button
                  variant="text"
                  className={ve.contentUploadBtn}
                  title="GIF"
                >
                  <GifUpload />
                </Button>
              </div>
              <div>
                <Button
                  className={ve.submitButton}
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  답글
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default CommentForm;
