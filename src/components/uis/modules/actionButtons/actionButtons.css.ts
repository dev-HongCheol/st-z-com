import { style } from "@vanilla-extract/css";

const buttonWrapper = style({
  display: "flex",
  width: "100%",
});
const button = style({
  flex: 1,
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
});

const widthAuto = style({
  width: "auto !important",
  padding: "0 !important",
  marginRight: "0.2rem",
});

const vx = {
  buttonWrapper,
  button,
  widthAuto,
};
export default vx;
