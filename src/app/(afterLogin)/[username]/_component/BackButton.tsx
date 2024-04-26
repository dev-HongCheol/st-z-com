"use client";
import BackArrow from "@/components/icons/BackArrow";
import Button from "@/components/uis/atoms/Button";
import { useRouter } from "next/navigation";
import React from "react";
import ve from "./backButton.css";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="text" className={ve.wrapper}>
      <BackArrow />
    </Button>
  );
};

export default BackButton;
