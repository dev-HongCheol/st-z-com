import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { cookies } from "next/headers";

export const middleware = async () => {
	const session = await auth();
	const cookie = cookies();

	if (!session && !cookie.get("connect.sid")) {
		return NextResponse.redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/i/flow/login`);
	}
};

export const config = {
	matcher: ["/compose/tweet", "/home", "/explore", "/message", "/search"],
};
