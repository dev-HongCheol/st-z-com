"use client";
import type React from "react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import Modal from "@/components/uis/modal/Modal";
import closeBtnImg from "@/assets/closeBtn.svg";
import Image from "next/image";
import Button from "@/components/uis/atoms/Button";
import ve from "./composeTweet.css";
import Link from "next/link";
import MediaUpload from "@/components/icons/MediaUpload";
import GifUpload from "@/components/icons/GifUpload";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
import type { Session } from "next-auth";
import type { Post } from "../../home/_components/TweetWrapper";
import { getComments } from "../../compose/tweet/libs/getComments";

dayjs.extend(relativeTime);
dayjs.locale(ko);

interface ComposeTweetProps {
  session: Session;
}

const ComposeTweet = ({ session }: ComposeTweetProps) => {
  const [commentPost, setCommentPost] = useState<Post | null>(null);
  useEffect(() => {
    const storageCommentPost = JSON.parse(
      sessionStorage.getItem("commentPost") || "{}"
    );
    if ("User" in storageCommentPost) setCommentPost(storageCommentPost);
  }, []);

  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaInput = useRef<HTMLInputElement>(null);
  const handleUploadMedia = () => {
    mediaInput.current?.click();
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (commentPost) {
      if (!textareaRef.current || !mediaInput.current) return;
      const content = textareaRef.current?.value;
      const images = mediaInput.current?.files;

      const formData = new FormData();
      formData.append("content", content);

      if (images && images?.length > 0) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      }

      const res = await getComments(commentPost.postId, formData);
      if (res) {
        router.back();
      }
    }
  };

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsSubmitDisabled(event.target.value.length === 0);
  };

  const onClose = () => {
    commentPost && sessionStorage.removeItem("commentPost");
    router.back();
  };
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
      {commentPost && (
        <div className={ve.contextWrapper}>
          <div className={ve.commentLeftWrapper}>
            <div className={ve.avatarImageWrapper}>
              <Image
                src={commentPost.User.image || ""}
                alt="profileImage"
                fill
                className={ve.avatarImage}
              />
            </div>
            <div className={ve.line}>{""}</div>
          </div>

          <div className={ve.commentRightWrapper}>
            <div className={ve.commentUser}>
              <span className={ve.commentNickname}>
                {commentPost.User.nickname}
              </span>
              <span className={ve.commentId}>@{commentPost.User.id}</span>
              <span>{dayjs(commentPost.createAt).fromNow()}</span>
            </div>
            <div className={ve.commentContent}>{commentPost.content}</div>
          </div>
        </div>
      )}

      <form className={ve.tweetForm} onSubmit={onSubmit}>
        <div className={ve.contextWrapper}>
          <div className={ve.avatarImageWrapper}>
            <Image
              src={session?.user.image || ""}
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
