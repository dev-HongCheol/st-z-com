import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          return {
            nickname: user.name,
            ...user,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
