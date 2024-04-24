import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(179,179,179,0.2)",
  borderRadius: "1rem",
  position: "sticky",
  marginTop: "0.4rem",
});

const searchIconWrapper = style({
  paddingLeft: "1rem",
});

const searchInputWrapper = style({
  flex: 1,
});

const searchInput = style({
  width: "100%",
  outline: "none",
  border: "none",
  padding: "12px",
  background: "inherit",
});

const ve = { wrapper, searchIconWrapper, searchInputWrapper, searchInput };

export default ve;
