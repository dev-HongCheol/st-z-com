import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해보세요.</div>
      <Link href={"/search"}></Link>
    </div>
  );
};

export default NotFound;
