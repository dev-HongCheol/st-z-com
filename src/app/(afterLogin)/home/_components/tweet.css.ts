import { style } from "@vanilla-extract/css";

const wrapper = style({
  maxHeight: "598px",
  borderBottom: "1px solid #e3e3e3",
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
  display: "flex",
  padding: "2px 16px",
  ":hover": {
    background: "rgba(0,0,0,0.02)",
    cursor: "pointer",
  },
});

const avatar = style({
  width: "40px",
  height: "40px",
  position: "relative",
  marginRight: "1.1rem",
  zIndex: -1,
});

const tweetContent = style({
  flex: 1,
});

const tweetUserWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

const tweetInfo = style({
  display: "flex",
});

const userName = style({
  fontWeight: "bold",
  marginRight: "0.7rem",
  ":hover": {
    textDecoration: "underline",
  },
});

const userId = style({
  color: "gray",
  ":hover": {
    textDecoration: "underline",
  },
});

const writeTime = style({
  color: "gray",
});

const dot = style({
  color: "gray",
  margin: "0 0.2rem",
  textOverflow: "unset",
});

const buttonWrapper = style({
  display: "flex",
});
const button = style({
  flex: 1,
  width: 40,
  height: 40,
});

const widthAuto = style({
  width: "auto !important",
});

const vx = {
  wrapper,
  avatar,
  tweetContent,
  tweetUserWrapper,
  tweetInfo,
  userName,
  userId,
  writeTime,
  dot,
  buttonWrapper,
  button,
  widthAuto,
};
export default vx;
