import { style } from "@vanilla-extract/css";

const modal = style({
  width: "100dvw",
  height: "100dvh",
  background: "rgba(0, 0, 0,0.2);",
  position: "fixed",
  top: 0,
  right: 0,
});

const modalWrapper = style({
  width: "600px",
  height: "650px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "0.8rem",
  borderRadius: "1rem",
});

export { modal, modalWrapper };
