import { style } from "@vanilla-extract/css";
const root = style({
  display: "flex",
  width: "100dvw",
  height: "100dvh",
  alignItems: "center",
  justifyItems: "center",
});

const contentDiv = style({
  flex: 1,
  textAlign: "center",
  alignItems: "center",
  justifyItems: "center",
});

const comment = style({
  textAlign: "left",
  width: "300px",
});

const h1 = style({
  fontSize: "3.5rem",
  textAlign: "left",
});

const joinComment = style({
  fontSize: "1.9rem",
  fontWeight: "bolder",
  marginTop: "1.3rem",
  marginBottom: "1.1rem",
});

const loginComment = style({
  fontSize: "1.1rem",
  fontWeight: "600",
  marginTop: "1.3rem",
  marginBottom: "1.1rem",
});

const styles = { root, contentDiv, comment, h1, joinComment, loginComment };
export default styles;
