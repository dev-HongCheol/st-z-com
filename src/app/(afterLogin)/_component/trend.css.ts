import { style } from "@vanilla-extract/css";

const wrapper = style({
  color: "gray",
  fontSize: "0.8rem",
  padding: "12px",
  ":hover": {
    background: "rgba(0,0,0,0.02)",
  },
});

const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const trendName = style({
  fontSize: "1.2rem",
  color: "black",
});

const ve = { wrapper, header, trendName };

export default ve;
