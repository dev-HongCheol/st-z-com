import PhotoModal from "@/app/(afterLogin)/_component/photoModal/PhotoModal";
import React from "react";

interface PhotoPageProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}
const PhotoPage = async ({ params }: PhotoPageProps) => {
  const { username: userId, id, photoId } = params;
  return (
    <>
      <PhotoModal userId={userId} photoId={photoId} postId={id} />
    </>
  );
};

export default PhotoPage;
