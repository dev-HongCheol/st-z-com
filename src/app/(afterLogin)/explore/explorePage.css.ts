import { style } from "@vanilla-extract/css";

const wrapper = style({
  position: "sticky",
  border: "1px solid #e3e3e3",
  top: 0,
  backgroundColor: "rgba(255, 255, 255, 1)",
  padding: "0 1rem",
});
const ve = {
  wrapper,
};

export default ve;
