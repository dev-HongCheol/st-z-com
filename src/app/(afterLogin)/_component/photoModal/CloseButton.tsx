"use client";
import Close from "@/components/icons/Close";
import Button from "@/components/uis/atoms/Button";
import React from "react";
import ve from "./photoModal.css";
import { useRouter } from "next/navigation";

const CloseButton = () => {
  const router = useRouter();
  return (
    <Button
      className={ve.closeBtn}
      variant="text"
      onClick={() => {
        router.back();
      }}
    >
      <Close
        style={{
          fill: "white",
        }}
      />
    </Button>
  );
};

export default CloseButton;
