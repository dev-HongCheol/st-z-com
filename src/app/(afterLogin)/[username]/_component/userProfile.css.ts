import { style } from "@vanilla-extract/css";

const garyBg = style({
  background: "rgb(207, 217, 222);",
  height: 199,
  position: "relative",
});

const profileWrapper = style({
  position: "relative",
});

const profileImageWrapper = style({
  border: "white 4px solid",
  borderRadius: "100%",
  position: "absolute",
  top: 125,
  left: 20,
});

const profileSettingButtonWrapper = style({
  textAlign: "right",
  marginTop: "0.6rem",
});

const profileSettingButton = style({
  width: "auto !important",
});

const userMetaInfo = style({
  padding: "1rem 1.4rem",
});

const userName = style({
  fontWeight: "bold",
  fontSize: "1.2rem",
});

const userId = style({
  color: "gray",
});

const ve = {
  garyBg,
  profileWrapper,
  profileImageWrapper,
  profileSettingButtonWrapper,
  profileSettingButton,
  userMetaInfo,
  userName,
  userId,
};

export default ve;
