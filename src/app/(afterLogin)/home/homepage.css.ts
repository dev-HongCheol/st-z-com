import { style } from "@vanilla-extract/css";

const main = style({
  display: "flex",
  justifyContent: "space-between",
});

const mainSection = style({
  width: "600px",
});
const sideSection = style({
  width: "380px",
});
export { main, mainSection, sideSection };
