import { style } from "@vanilla-extract/css";

const profileBtn = style({
  marginBottom: "10px",
  ":hover": {
    background: "rgb(255,255,255) !important",
  },
});

const ve = { profileBtn };

export default ve;
