import { style } from "@vanilla-extract/css";

const wrapper = style({
	borderRadius: "0.7rem",
	margin: "1rem 0",
});

const title = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	fontSize: "1.1rem",
	padding: "1rem",
});

const badge = style({
	background: "rgb(73, 22, 0)",
	fontWeight: "bold",
	color: "white",
	padding: "0.1rem 0.2rem",
	borderRadius: "0.2rem",
	fontSize: "0.8rem",
});

const noTrend = style({
	padding: "1rem",
});
const ve = { wrapper, title, badge, noTrend };

export default ve;
