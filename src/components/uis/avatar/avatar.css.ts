import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const ImgWrapper = style({
  position: "relative",
  width: 40,
  height: 40,
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

const id = style({
  color: "gray",
});

const ve = {
  wrapper,
  ImgWrapper,
  rounded,
  text,
  name,
  id,
};

export default ve;
