import React, { CSSProperties } from "react";
import vx from "./tweetButton.css";
interface ViewsProps {
  style?: CSSProperties;
}
const Views = ({ style }: ViewsProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={vx.tweetButtons}
      style={style}
    >
      <g>
        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
      </g>
    </svg>
  );
};

export default Views;
