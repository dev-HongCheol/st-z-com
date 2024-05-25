import { style } from "@vanilla-extract/css";

const header = style({
  position: "fixed",
  height: "100dvh",
  top: 0,
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const logoImage = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "15px !important",
});

const navWrapper = style({
  flex: 1,
});

export { header, navWrapper, logoImage };
