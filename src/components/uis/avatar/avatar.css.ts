import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const ImgWrapper = style({
  position: "relative",
  width: 42,
  height: 42,
});

const rounded = style({
  borderRadius: "100%",
});

const text = style({
  textAlign: "left",
});

const name = style({
  fontWeight: "bold",
});

const ve = {
  wrapper,
  ImgWrapper,
  rounded,
  text,
  name,
};

export default ve;
