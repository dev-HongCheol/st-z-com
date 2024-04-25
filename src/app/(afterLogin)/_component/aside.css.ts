import { style } from "@vanilla-extract/css";

const aside = style({
  width: "380px",
});

const sideSection = style({
  position: "sticky",
  top: 0,
});

const ve = { aside, sideSection };
export default ve;
