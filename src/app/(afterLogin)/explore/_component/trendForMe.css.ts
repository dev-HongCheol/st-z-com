import { style } from "@vanilla-extract/css";

const wrapper = style({
  borderRight: "1px solid #e3e3e3",
  borderLeft: "1px solid #e3e3e3",
  borderBottom: "1px solid #e3e3e3",
});

const title = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1.1rem",
  padding: "1rem",
});

const ve = { wrapper, title };

export default ve;
