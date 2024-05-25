"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const signup = async (
  prevState: { message: string } | undefined,
  formData: FormData
) => {
  let shouldRedirect = false;

  if (!formData.get("name")) {
    return { message: "no_name" };
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;

    signIn("credentials", {
      id: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (e) {
    return { message: "users error" };
  }

  if (shouldRedirect) {
    redirect("/home");
  }
};

export default signup;
