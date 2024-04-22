import { style } from "@vanilla-extract/css";

const tweetButtons = style({
  width: 18,
  height: 18,
  ":hover": {
    color: "blue",
  },
});

const vx = { tweetButtons };
export default vx;
