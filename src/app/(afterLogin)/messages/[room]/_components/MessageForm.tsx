"use client";
import React, { useEffect } from "react";
import useWebSocket from "../_lib/useWebSocket";

const MessageForm = () => {
  const { disconnect, webSocket } = useWebSocket();

  useEffect(() => {
    webSocket?.on("receiveMessage", () => {});

    return () => {
      webSocket?.off("receiveMessage");
    };
  }, [webSocket]);

  return <div>MessageForm</div>;
};

export default MessageForm;
