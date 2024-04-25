import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    width: "100%",
    cursor: "pointer",
  },

  variants: {
    variant: {
      contained: {
        background: "rgb(29, 155, 240)",
        borderRadius: "1.5rem",
        border: "1px solid",
        color: "white",
        borderColor: "rgba(0, 0, 0, 0)",
        ":hover": {
          background: "rgba(29, 155, 240, 0.9)",
        },
        ":disabled": {
          background: "rgba(29, 155, 240, 0.7)",
        },
      },
      text: {
        background: "rgba(0, 0, 0, 0)",
        border: "none",
        ":hover": {
          background: "rgba(0, 0, 0, 0.05)",
        },
      },
      outlined: {
        borderRadius: "1.5rem",
        border: "1px solid",
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
    padding: {
      none: {},
      rounded: {
        ":hover": {
          background: "rgba(0, 0, 0, 0.05)",
          margin: "2rem",
        },
      },
    },

    compoundVariants: [
      {
        variants: {
          color: "contained",
          size: "large",
        },
      },
    ],

    defaultVariants: {
      color: "contained",
      size: "medium",
    },
  },
});
