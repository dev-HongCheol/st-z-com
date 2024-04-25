import { style } from "@vanilla-extract/css";

const tabWrapper = style({
  display: "flex",
  height: "53px",
  alignItems: "center",
  border: "1px solid #e3e3e3",
  position: "sticky",
  top: "0px",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.65)",
});

const tab = style({
  flex: 1,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  alignItems: "center",
  cursor: "pointer",
});

const activeTabText = style({
  marginTop: "15px",
});

const activeTab = style({
  width: "53px",
  borderBottom: "3px solid rgb(29, 155, 240)",
});

const ve = { tabWrapper, tab, activeTabText, activeTab };

export default ve;
