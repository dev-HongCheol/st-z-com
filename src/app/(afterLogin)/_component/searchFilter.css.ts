import { style } from "@vanilla-extract/css";

const wrapper = style({
  border: "1px solid #e3e3e3",
  borderRadius: "0.7rem",
  padding: "0.6rem 0.9rem",
  margin: "0.9rem 0",
});

const title = style({
  fontSize: "1.2rem",
});

const filterTitle = style({
  fontSize: "0.95rem",
  fontWeight: 700,
});

const inputWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "0.5rem",
});

const ve = { wrapper, title, filterTitle, inputWrapper };

export default ve;
