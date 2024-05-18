import { style } from "@vanilla-extract/css";

const buttonWrapper = style({
  display: "flex",
  width: "100%",
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
  buttonWrapper,
  button,
  widthAuto,
};
export default vx;
