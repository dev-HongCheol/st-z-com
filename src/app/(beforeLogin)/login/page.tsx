"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/main/Main";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);
  return <Main />;
}
