"use client";
import React, { useEffect } from "react";

const MSWComponent = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
      require("@/mocks/broswer");
    }
  });
  return null;
};

export default MSWComponent;
