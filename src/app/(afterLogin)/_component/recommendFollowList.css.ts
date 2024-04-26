import { style } from "@vanilla-extract/css";

const wrapper = style({
  border: "1px solid #e3e3e3",
  borderRadius: "0.7rem",
  padding: "1rem 0",
  margin: "1rem 0",
});

const title = style({
  fontSize: "1.1rem",
  padding: "0 1rem 1rem 1rem ",
});

const ve = { wrapper, title };

export default ve;
