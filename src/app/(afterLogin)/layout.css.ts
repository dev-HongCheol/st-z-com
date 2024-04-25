import { style } from "@vanilla-extract/css";

const layoutWrapper = style({
  width: "1300px",
  margin: "0 auto",
  position: "relative",
  display: "flex",
});

const mainWrapper = style({
  width: "calc(100% - 300px)",
  display: "flex",
  justifyContent: "space-between",
});

const headerWrapper = style({
  width: "300px",
  height: "100dvh",
});

const main = style({
  width: "600px",
});

const ve = { layoutWrapper, mainWrapper, headerWrapper, main };
export default ve;
