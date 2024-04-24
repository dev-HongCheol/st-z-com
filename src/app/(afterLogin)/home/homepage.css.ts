import { style } from "@vanilla-extract/css";

const main = style({
  display: "flex",
  justifyContent: "space-between",
});

const mainSection = style({
  width: "600px",
});
const aside = style({
  width: "380px",
});

const sideSection = style({
  position: "sticky",
  top: 0,
});
const ve = { main, mainSection, aside, sideSection };

export default ve;
