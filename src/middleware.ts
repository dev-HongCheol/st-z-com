import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const middleware = async () => {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_DOMAIN}/i/flow/login`
    );
  }
};

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/message", "/search"],
};
