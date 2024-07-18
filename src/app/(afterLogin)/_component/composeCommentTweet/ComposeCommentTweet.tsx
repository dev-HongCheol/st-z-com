"use client";
import type React from "react";
import { type FormEvent, useRef, useState } from "react";
import Modal from "@/components/uis/modal/Modal";
import closeBtnImg from "@/assets/closeBtn.svg";
import Image from "next/image";
import Button from "@/components/uis/atoms/Button";
import ve from "./composeCommentTweet.css";
import Link from "next/link";
import MediaUpload from "@/components/icons/MediaUpload";
import GifUpload from "@/components/icons/GifUpload";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ko from "dayjs/locale/ko";
dayjs.extend(relativeTime);
dayjs.locale(ko);
import cx from "classnames";
import type { Post } from "../../home/_components/TweetWrapper";
import { useSession } from "next-auth/react";

interface ComposeCommentTweetProps {
  post: Post;
}

const ComposeCommentTweet = ({ post }: ComposeCommentTweetProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaInput = useRef<HTMLInputElement>(null);
  const handleUploadMedia = () => {
    mediaInput.current?.click();
  };

  const handleLinkStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
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

      {/* post */}
      <div
        className={cx(
          ve.wrapper
          // isPhoto && ve.colorWhite,
          // isNoneBorder && ve.noneBorder
        )}
      >
        <div className={ve.avatar}>
          <Image src={post.User.image} alt="profile" width={40} height={40} />
        </div>
        <div className={ve.tweetContent}>
          <div className={ve.tweetUserWrapper}>
            <div className={ve.tweetInfo}>
              <div className={ve.userName}>
                <Link
                  href={`/${post.User.id}`}
                  passHref
                  onClick={handleLinkStopPropagation}
                >
                  {post.User.nickname}
                </Link>
              </div>
              <div className={ve.userId}>
                <Link
                  href={`/${post.User.id}`}
                  onClick={handleLinkStopPropagation}
                >
                  @{post.User.id}
                </Link>
              </div>

              <span className={ve.dot}>·</span>
              <div className={ve.userId}>{dayjs(post.createAt).fromNow()}</div>
            </div>
          </div>
          {/* content */}
          <div>{post.content}</div>
        </div>
      </div>

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

export default ComposeCommentTweet;
