import { style } from "@vanilla-extract/css";

const tabWrapper = style({
  display: "flex",
  height: "53px",
  alignItems: "center",
  width: "100%",
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

const tabText = style({
  marginTop: "15px",
});

const activeTabText = style({
  fontWeight: "bold",
});

const activeTab = style({
  width: "53px",
  borderBottom: "3px solid rgb(29, 155, 240)",
});

const ve = { tabWrapper, tab, tabText, activeTabText, activeTab };

export default ve;
