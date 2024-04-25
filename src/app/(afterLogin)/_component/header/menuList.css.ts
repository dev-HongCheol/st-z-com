import { style } from "@vanilla-extract/css";

const menuItemLi = style({
  listStyle: "none",
});

const menuItem = style({
  display: "inline-flex",
  alignItems: "center",
  marginTop: "0.8rem",
  fontSize: "1.2rem",
  padding: "10px 15px",
  width: "auto !important",
  textDecoration: "none",
  borderRadius: "1.5rem",
  ":hover": {
    background: "rgba(0, 0, 0, 0.05)",
  },
});

const navIcon = style({
  width: "29px",
  height: "30px",
});

const menuItemLabel = style({
  padding: "0 20px",
});

const selected = style({
  fontWeight: "bold",
});

const tweetBtn = style({
  width: "90% !important",
  marginTop: "0.8rem",
  height: "50px",
});

export { menuItemLi, menuItem, navIcon, menuItemLabel, selected, tweetBtn };
