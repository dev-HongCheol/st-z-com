import { style } from "@vanilla-extract/css";

const receiveUserProfileWrapper = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

const avatarWrapper = style({
  position: "relative",
  width: 120,
  aspectRatio: "9/10",
  margin: "30px auto",
});

const nickName = style({});

const ve = {
  receiveUserProfileWrapper,
  avatarWrapper,
};

export default ve;
