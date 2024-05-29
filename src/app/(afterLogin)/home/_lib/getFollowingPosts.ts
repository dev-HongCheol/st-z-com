const getPostRecommends = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      next: {
        tags: ["tweet", "recommends"],
      },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch tweet data");
  }
  return res.json();
};

export default getPostRecommends;
