import PhotoModal from "@/app/(afterLogin)/_component/photoModal/PhotoModal";
import React from "react";

interface PhotoPageProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}
const PhotoPage = ({ params }: PhotoPageProps) => {
  return (
    <>
      <PhotoModal />
    </>
  );
};

export default PhotoPage;