import { style } from "@vanilla-extract/css";

const modalHeader = style({
  display: "flex",
});

const headerFlex = style({
  flex: 1,
});

const closeBtn = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "5px !important",
  float: "left",
});

const logoImage = style({
  textAlign: "center",
});

const loginForm = style({
  width: "80%",
  margin: "0 auto",
});

export { modalHeader, headerFlex, closeBtn, logoImage, loginForm };
