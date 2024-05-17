import { style } from "@vanilla-extract/css";

const SinglePostPageWrapper = style({});

const header = style({
  display: "flex",
  alignItems: "center",
  columnGap: "2rem",
  position: "sticky",
  height: 53,
  top: 0,
  background: "white",
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
});

const profileBtn = style({
  ":hover": {
    background: "rgb(255,255,255) !important",
  },
});

const articleWrapper = style({});

const ve = {
  SinglePostPageWrapper,
  header,
  profileBtn,
  articleWrapper,
};
export default ve;
