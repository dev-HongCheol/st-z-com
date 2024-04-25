import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
  position: "sticky",
  marginTop: "0.4rem",
  zIndex: 2,
  top: 0,
});

const inputBlur = style({
  background: "#f0f0f0",
  border: "1px solid #f0f0f0",
});
const inputFocus = style({
  background: "none",
  border: "1px solid rgb(29, 155, 240)",
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

const ve = {
  wrapper,
  inputBlur,
  inputFocus,
  searchIconWrapper,
  searchInputWrapper,
  searchInput,
};

export default ve;
