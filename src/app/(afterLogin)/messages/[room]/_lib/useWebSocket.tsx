"use client";
import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";
import { io, type Socket } from "socket.io-client";

let webSocket: Socket | null;
const useWebSocket = () => {
  const session = useSession();

  const disconnect = useCallback(() => {
    webSocket?.disconnect();
    webSocket = null;
  }, []);

  useEffect(() => {
    if (!webSocket) {
      webSocket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        transports: ["websocket"],
      });
      webSocket.on("connect_error", (error) => {
        console.error(error);

        console.log(
          "🚀  file: useWebSocket.tsx:26  _webSocket.on  error_",
          error
        );
      });
    }
  }, []);

  useEffect(() => {
    if (webSocket?.connected && session.data?.user.id) {
      webSocket?.emit("login", {
        id: session.data.user.id,
      });
    }
  }, [session]);

  return {
    webSocket,
    disconnect,
  };
};

export default useWebSocket;
