import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    nickname: string;
  }

  interface Session {
    user: User;
  }
}
