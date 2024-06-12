import { style } from "@vanilla-extract/css";

const wrapper = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "12px",
	":hover": {
		background: "rgba(0,0,0,0.02)",
	},
});

const button = style({
	width: "auto !important",
	background: "black !important",
	border: "1px solid black !important",
	padding: "0.4rem 0.8rem !important",
	color: "white",
});

const button1 = style({
	width: "auto !important",
	background: "white !important",
	border: "1px solid black !important",
	padding: "0.4rem 0.8rem !important",
	color: "black",
});

const ve = { wrapper, button, button1 };

export default ve;
