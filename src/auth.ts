import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  debug: process.env.NODE_ENV !== "production",
  pages: {
    newUser: "/i/flow/signup",
    signIn: "/i/flow/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            body: JSON.stringify({
              id: credentials?.username,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${token.sub}`,
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      );
      const userInfo = await res.json();
      session.user = userInfo;
      return session;
    },
  },
});
