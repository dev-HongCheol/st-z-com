import { style } from "@vanilla-extract/css";

const header = style({
  display: "flex",
  alignItems: "center",
});

const metaName = style({
  fontSize: "1.1rem",
  fontWeight: "bold",
});

const posts = style({
  color: "gray",
});

const ve = { header, metaName, posts };
export default ve;
