import { style } from "@vanilla-extract/css";

const profileWrapper = style({
  border: "1px solid #e3e3e3",
});

const header = style({
  display: "flex",
  alignItems: "center",
  columnGap: "2rem",
});

const metaName = style({
  fontSize: "1.1rem",
  fontWeight: "bold",
});

const posts = style({
  color: "gray",
});

const ve = { profileWrapper, header, metaName, posts };
export default ve;
