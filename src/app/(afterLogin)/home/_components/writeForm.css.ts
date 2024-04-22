import { style } from "@vanilla-extract/css";

const writeFormWrapper = style({
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
  borderBottom: "1px solid #e3e3e3",
  display: "flex",
  padding: "1.1rem",
});

const avatar = style({
  width: "40px",
  height: "40px",
  position: "relative",
  marginRight: "1.1rem",
  zIndex: -1,
});

const avatarImage = style({
  borderRadius: "100%",
  width: "40px",
});

const writeForm = style({
  width: "100%",
});

const formTextarea = style({
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "1.4rem",
  resize: "none",
  marginTop: "0.4rem",
  height: "25px",
});

const comment = style({
  color: "rgb(29, 155, 240) !important",
});

const divider = style({
  margin: "1rem 0",
});

const btns = style({
  display: "flex",
});

const uploadContentBtnWrapper = style({
  flex: 1,
});

const submitButton = style({
  width: "auto !important",
});

const contentUploadBtn = style({
  width: "auto !important",
  padding: "0 !important",
  marginRight: "0.3rem",
});

export {
  writeFormWrapper,
  avatar,
  avatarImage,
  writeForm,
  formTextarea,
  comment,
  divider,
  btns,
  uploadContentBtnWrapper,
  submitButton,
  contentUploadBtn,
};
