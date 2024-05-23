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

const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "80%",
  margin: "0 auto",
  height: "90%",
});

const logoImage = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "15px !important",
});

const vx = { modalHeader, headerFlex, closeBtn, wrapper, logoImage };

export default vx;
