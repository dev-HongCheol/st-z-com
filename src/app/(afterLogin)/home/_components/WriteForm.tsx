"use client";
import type React from "react";
import { type FormEvent, useRef, useState, type ChangeEvent } from "react";
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
import type { User } from "next-auth";
import {
  type InfiniteData,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";
import type { Post } from "./TweetWrapper";

interface WriteFormProps {
  user: User;
}

const WriteForm = ({ user }: WriteFormProps) => {
  const [isClickedTextarea, setIsClickedTextarea] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [preViewImageFiles, setPreViewImageFiles] = useState<
    {
      index: number;
      dataUrl: string;
      file: File;
    }[]
  >([]);

  const mediaInput = useRef<HTMLInputElement>(null);
  const handleUploadMedia = () => {
    mediaInput.current?.click();
  };

  const handleFocusTextarea = () => {
    setIsClickedTextarea(true);
  };

  const writePost = (formData: FormData) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
      method: "post",
      credentials: "include",
      body: formData,
    });
  };

  const mutation = useMutation({
    mutationFn: writePost,
    onSuccess: async (data, variables) => {
      if (data.ok) {
        if (formRef.current) formRef.current.reset();

        const newPost: Post = await data.json();
        newPost._count = {
          Comments: 0,
          Hearts: 0,
          Reposts: 0,
        };
        queryClient.setQueryData(
          ["tweet", "recommends"],
          (pre: InfiniteData<Post[]>) => {
            const prePost = structuredClone(pre);
            prePost.pages[0].unshift(newPost);
            return prePost;
          }
        );
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handlePreViewImage = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const files = Array.from(event.target.files);
      files.forEach((file, index) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          setPreViewImageFiles((pre) => {
            if (pre)
              return [
                ...pre,
                {
                  index,
                  dataUrl: reader.result as string,
                  file,
                },
              ];
            return [];
          });
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const queryClient = useQueryClient();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("content", textareaRef.current?.value || "");
    for (const preViewImageFile of preViewImageFiles) {
      formData.append("images", preViewImageFile.file);
    }
    mutation.mutate(formData);
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

  const handleRemoveImage = (index: number) => {
    setPreViewImageFiles((pre) => pre.filter((image) => image.index !== index));

    if (mediaInput.current) {
      if (mediaInput.current.files) {
        const files = Array.from(mediaInput.current.files);
        const dataTransfer = new DataTransfer();
        files.forEach((file: File, _index: number) => {
          if (index !== _index) {
            dataTransfer.items.add(file);
          }
        });
        mediaInput.current.files = dataTransfer.files;
      }
    }
  };

  return (
    <div className={writeFormWrapper}>
      <div className={avatar}>
        <Image
          src={user.image as string}
          alt="profileImage"
          className={avatarImage}
          width={40}
          height={40}
        />
      </div>
      <form className={writeForm} onSubmit={handleSubmit} ref={formRef}>
        <textarea
          className={formTextarea}
          placeholder="무슨 일이 있어나고 있나요?"
          onFocus={handleFocusTextarea}
          ref={textareaRef}
          onChange={onChangeTextarea}
          onInput={adjustTextareaHeight}
        />
        {/* preview */}
        <div>
          {preViewImageFiles.map((preViewImageFile) => (
            <Image
              src={preViewImageFile.dataUrl}
              alt="image preview"
              key={preViewImageFile.index}
              width={50}
              height={50}
              onClick={() => handleRemoveImage(preViewImageFile.index)}
            />
          ))}
        </div>
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
              onChange={handlePreViewImage}
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
