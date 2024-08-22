import { cookies } from "next/headers";

export const getRooms = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/rooms`,
    {
      headers: {
        cookies: cookies().toString(),
        credentials: "include",
      },
    }
  );

  if (!res.ok) {
    console.log(await res.text());
    throw new Error("getRooms Error");
  }

  return res.json();
};
