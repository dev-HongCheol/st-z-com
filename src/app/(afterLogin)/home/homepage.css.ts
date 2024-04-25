import { style } from "@vanilla-extract/css";

const main = style({
  display: "flex",
  justifyContent: "space-between",
});

const mainSection = style({
  width: "600px",
});

const ve = { main, mainSection };

export default ve;
