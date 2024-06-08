import PhotoModal from "@/app/(afterLogin)/_component/photoModal/PhotoModal";
import React from "react";

interface PhotoPageProps {
  params: {
    username: string;
  };
}
const PhotoPage = ({ params }: PhotoPageProps) => {
  const { username: userId } = params;
  return (
    <>
      <PhotoModal userId={userId} />
    </>
  );
};

export default PhotoPage;
