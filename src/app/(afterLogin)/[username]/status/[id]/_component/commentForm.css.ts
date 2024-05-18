import { style } from "@vanilla-extract/css";

const wrapper = style({
  display: "flex",
  padding: "1.1rem",
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
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
  margin: "1rem 0",
  height: "25px",
});

const statusFormTextarea = style({
  background: "inherit",
  color: "white",
});

const comment = style({
  color: "rgb(29, 155, 240) !important",
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

const postUserId = style({
  paddingLeft: 75,
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
});

const ve = {
  wrapper,
  avatar,
  avatarImage,
  writeForm,
  statusFormTextarea,
  formTextarea,
  comment,
  btns,
  uploadContentBtnWrapper,
  submitButton,
  contentUploadBtn,
  postUserId,
};

export default ve;
