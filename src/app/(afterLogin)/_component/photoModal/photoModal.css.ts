import { style } from "@vanilla-extract/css";

const modal = style({
  width: "100dvw",
  height: "100dvh",
  background: "rgba(0, 0, 0,0.9);",
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 20,
});

const wrapper = style({
  display: "flex",
  zIndex: 21,
  position: "relative",
  height: "100dvh",
});

const imageWrapper = style({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

const header = style({
  height: 50,
});

const closeBtn = style({
  width: "auto !important",
});

const image = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
});

const actionButtonsWrapper = style({
  width: 600,
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
});

const tweetWrapper = style({
  width: 340,
  overflowY: "scroll",
});

const ve = {
  modal,
  closeBtn,
  imageWrapper,
  wrapper,
  header,
  actionButtonsWrapper,
  tweetWrapper,
  image,
};
export default ve;
