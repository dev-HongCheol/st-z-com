import React from "react";
import { DotLoader } from "react-spinners";
import ve from "./loading.css";

const Loading = () => {
  return (
    <div className={ve.wrapper}>
      <DotLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
