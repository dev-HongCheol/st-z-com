import { style } from "@vanilla-extract/css";

const homeTopTabWrapper = style({
  display: "flex",
  height: "53px",
  alignItems: "center",
  border: "1px solid #e3e3e3",
});

const homeTopTab = style({
  flex: 1,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  alignItems: "center",
});

const activeTabText = style({
  marginTop: "15px",
});

const activeTab = style({
  width: "53px",
  borderBottom: "3px solid rgb(29, 155, 240)",
});

export { homeTopTabWrapper, homeTopTab, activeTabText, activeTab };
