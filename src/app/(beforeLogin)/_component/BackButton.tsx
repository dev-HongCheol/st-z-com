"use client";
import Button from "@/components/uis/atoms/Button";
import React from "react";
import closeBtnImg from "@/assets/closeBtn.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import vx from "./backButton.css";

const BackButton = () => {
  const router = useRouter();
  const onClose = () => {
    router.back();
  };

  return (
    <Button variant="text" className={vx.closeBtn} onClick={onClose}>
      <Image src={closeBtnImg} alt="close btn" />
    </Button>
  );
};

export default BackButton;
