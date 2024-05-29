import React from "react";
import ve from "./trendForMe.css";
import Link from "next/link";
import TrendList from "./TrendList";

const TrendForMe = () => {
  return (
    <div className={ve.wrapper}>
      <div className={ve.title}>
        <h3>나를 위한 트렌드</h3>
      </div>
      {/* trendList */}
      <TrendList />
      <Link href={"#"}>더보기</Link>
    </div>
  );
};

export default TrendForMe;
