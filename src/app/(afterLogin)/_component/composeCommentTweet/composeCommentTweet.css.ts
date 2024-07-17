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

const wrapper = style({
  maxHeight: "598px",
  borderBottom: "1px solid #e3e3e3",
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
  display: "flex",
  padding: "2px 16px",
  ":hover": {
    background: "rgba(0,0,0,0.02)",
    cursor: "pointer",
  },
});

const avatar = style({
  maxWidth: "40px",
  maxHeight: "40px",
  position: "relative",
  marginRight: "1.1rem",
  zIndex: -1,
});

const tweetContent = style({
  flex: 1,
});

const tweetUserWrapper = style({
  display: "flex",
  justifyContent: "space-between",
});

const tweetInfo = style({
  display: "flex",
});

const userName = style({
  fontWeight: "bold",
  marginRight: "0.7rem",
  ":hover": {
    textDecoration: "underline",
  },
});

const userId = style({
  color: "gray",
  ":hover": {
    textDecoration: "underline",
  },
});

const imageWrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "0.2rem",
});

const image1 = style({
  width: 500,
  height: 400,
  position: "relative",
});

const image2 = style({
  width: 250,
  height: 260,
  position: "relative",
});

const image3 = style({
  width: 250,
  height: 150,
  position: "relative",
});

const image3Grid = style({
  gridRow: "1 / span 2",
});

const image3First = style({
  position: "relative",
  width: 250,
  height: 300,
});

const image4 = style({
  width: 250,
  height: 150,
  position: "relative",
});

const statusImage = style({
  width: 200,
  height: 150,
});

const writeTime = style({
  color: "gray",
});

const dot = style({
  color: "gray",
  margin: "0 0.2rem",
  textOverflow: "unset",
});

const buttonWrapper = style({
  display: "flex",
});
const button = style({
  flex: 1,
  width: 40,
  height: 40,
});

const widthAuto = style({
  width: "auto !important",
});

const colorWhite = style({
  color: "white",
});

const noneBorder = style({
  borderLeft: "none",
  borderRight: "none",
});

const rePostWrapper = style({
  paddingLeft: "1rem",
  borderLeft: "1px solid #e3e3e3",
  borderRight: "1px solid #e3e3e3",
  color: "gray",
  display: "flex",
  alignItems: "center",
  columnGap: "0.2rem",
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

  wrapper,
  avatar,
  tweetContent,
  tweetUserWrapper,
  tweetInfo,
  userName,
  userId,
  imageWrapper,
  image1,
  image2,
  image3,
  image3Grid,
  image3First,
  image4,
  statusImage,
  writeTime,
  dot,
  buttonWrapper,
  button,
  widthAuto,
  colorWhite,
  noneBorder,
  rePostWrapper,
};

export default ve;
