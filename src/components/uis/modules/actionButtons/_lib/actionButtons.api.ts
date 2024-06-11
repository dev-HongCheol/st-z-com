const postLikedHeart = async (postId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/heart`,
    {
      method: "post",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const deleteUnLikedHeart = async (postId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/heart`,
    {
      method: "delete",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const postReposts = async (postId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/reposts`,
    {
      method: "post",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const deleteReposts = async (postId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}/reposts`,
    {
      method: "delete",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

export { postLikedHeart, deleteUnLikedHeart, postReposts, deleteReposts };
