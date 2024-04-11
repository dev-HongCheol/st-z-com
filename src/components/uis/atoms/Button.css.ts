import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    borderRadius: "1rem",
    border: "1px solid",
    width: "100%",
    cursor: "pointer",
  },

  variants: {
    color: {
      primary: {
        background: "rgb(29, 155, 240)",
        color: "white",
        borderColor: "rgba(0, 0, 0, 0)",
        ":hover": {
          background: "rgba(29, 155, 240, 0.9)",
        },
      },
      text: {
        background: "rgba(0, 0, 0, 0)",
        borderColor: "rgb(29, 155, 240)",
        ":hover": {
          background: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 10 },
      large: { padding: 24 },
    },

    compoundVariants: [
      {
        variants: {
          color: "neutral",
          size: "large",
        },
        style: {
          background: "ghostwhite",
        },
      },
    ],

    defaultVariants: {
      color: "primary",
      size: "medium",
    },
  },
});
