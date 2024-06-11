const getTrends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/hashtags/trends`,
    {
      next: {
        tags: ["trends"],
      },
      cache: "no-store",
      credentials: "include",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch tweet data");
  }
  return res.json();
};

export default getTrends;
