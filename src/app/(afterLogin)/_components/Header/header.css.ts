import { style } from "@vanilla-extract/css";

const header = style({
  position: "fixed",
  height: "100dvh",
  top: 0,
  width: "300px",
});

const logoImage = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "15px !important",
});

export { header, logoImage };
