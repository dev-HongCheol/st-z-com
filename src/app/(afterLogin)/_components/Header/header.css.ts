import { style } from "@vanilla-extract/css";

const header = style({
  position: "fixed",
  height: "100dvh",
  top: 0,
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const logoImage = style({
  width: "auto !important",
  borderRadius: "100%",
  padding: "15px !important",
});

const navWrapper = style({
  flex: 1,
});

const profileBtn = style({
  marginBottom: "10px",
  ":hover": {
    background: "rgb(255,255,255) !important",
  },
});

const profileWrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const profileImgWrapper = style({
  position: "relative",
  width: 42,
  height: 42,
});
const profileImg = style({
  borderRadius: "100%",
});

const profileText = style({
  textAlign: "left",
});

const profileName = style({
  fontWeight: "bold",
});

export {
  header,
  navWrapper,
  logoImage,
  profileBtn,
  profileWrapper,
  profileImgWrapper,
  profileImg,
  profileText,
  profileName,
};
