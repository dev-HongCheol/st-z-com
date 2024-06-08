"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

const signup = async (
	prevState: { message: string } | undefined,
	formData: FormData,
) => {
	let shouldRedirect = false;

	if (!formData.get("nickname")) {
		return { message: "no_nickname" };
	}
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
			{
				method: "post",
				body: formData,
				credentials: "include",
			},
		);
		console.log("🚀 _ response:", await response.json());
		if (response.status === 403) {
			return { message: "user_exists" };
		}
		shouldRedirect = true;

		const res = await signIn("credentials", {
			id: formData.get("id"),
			password: formData.get("password"),
			redirect: false,
		});
		console.log("🚀 _ res:", res);
	} catch (e) {
		return { message: "users error" };
	}

	if (shouldRedirect) {
		redirect("/home");
	}
};

export default signup;
