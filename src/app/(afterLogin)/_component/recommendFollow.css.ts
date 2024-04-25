import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 0",
});

const button = style({
  width: "auto !important",
  background: "black !important",
  border: "1px solid black !important",
  padding: "0.4rem 0.8rem !important",
  color: "white",
});

const ve = { wrapper, button };

export default ve;
