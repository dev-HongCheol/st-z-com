import { style } from "@vanilla-extract/css";

const layoutWrapper = style({
  width: "1300px",
  margin: "0 auto",
  position: "relative",
  display: "flex",
});

const mainWrapper = style({
  width: "calc(100% - 300px)",
  background: "red",
});

const headerWrapper = style({
  width: "300px",
  height: "100dvh",
});
export { layoutWrapper, mainWrapper, headerWrapper };
