import { style } from "@vanilla-extract/css";

const inputWrapper = style({
  border: "1px solid gray",
  borderRadius: "0.4rem",
  padding: "0.2rem 0.4rem",
  color: "gray",
});

const input = style({
  outline: "none",
  border: "none",
  width: "100%",
  marginTop: "0.3rem",
  fontSize: "1.1rem",
});

export { inputWrapper, input };
