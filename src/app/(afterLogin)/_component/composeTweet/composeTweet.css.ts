import { style } from "@vanilla-extract/css";

const modalWrapper = style({
  height: "auto !important",
});

const modalHeader = style({
  display: "flex",
});

const closeBtn = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "5px !important",
  float: "left",
});

const contextWrapper = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "1.1rem",
});

const avatarImageWrapper = style({
  width: 42,
  height: 42,
  position: "relative",
});

const avatarImage = style({
  borderRadius: "100%",
});

const tweetForm = style({
  width: "100%",
  margin: "1rem auto 0 auto",
});

const textareaWrapper = style({
  flex: 1,
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

const hr = style({
  margin: "1rem 0",
});

const actionButtons = style({
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

const commentLeftWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const line = style({
  flexGrow: 1,
  background: "#e3e3e3",
  width: 3,
});

const commentRightWrapper = style({
  flexGrow: 1,
});

const commentUser = style({
  display: "flex",
  marginBottom: "0.2rem",
});

const commentId = style({
  margin: "0 0.5rem",
  color: "gray",
});

const commentNickname = style({
  fontWeight: "bold",
});

const commentContent = style({
  // width: "min-content",
});

const ve = {
  modalWrapper,
  modalHeader,
  closeBtn,
  contextWrapper,
  avatarImageWrapper,
  avatarImage,
  tweetForm,
  textareaWrapper,
  formTextarea,
  hr,
  actionButtons,
  uploadContentBtnWrapper,
  submitButton,
  contentUploadBtn,
  commentLeftWrapper,
  line,
  commentRightWrapper,
  commentUser,
  commentId,
  commentNickname,
  commentContent,
};

export default ve;
