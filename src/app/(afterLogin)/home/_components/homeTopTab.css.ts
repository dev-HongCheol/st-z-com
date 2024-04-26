import { style } from "@vanilla-extract/css";

const homeTopTabWrapper = style({
  border: "1px solid #e3e3e3",
  position: "sticky",
  top: "0px",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.65)",
  width: "100%",
});

const ve = { homeTopTabWrapper };
export default ve;
