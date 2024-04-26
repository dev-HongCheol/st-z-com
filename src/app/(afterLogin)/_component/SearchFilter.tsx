import React from "react";
import ve from "./searchFilter.css";

const SearchFilter = () => {
  return (
    <div>
      <div className={ve.wrapper}>
        <h3 className={ve.title}>검색 필터</h3>
      </div>

      <div className={ve.wrapper}>
        <div className={ve.filterTitle}>사용자</div>
        <div>
          <div className={ve.inputWrapper}>
            <label htmlFor="allUser">모든 사용자</label>
            <input type="radio" name="userType" id="allUser" value="allUser" />
          </div>
          <div className={ve.inputWrapper}>
            <label htmlFor="myFollow">내가 팔로우하는 사람들</label>
            <input
              type="radio"
              name="userType"
              id="myFollow"
              value="myFollow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
