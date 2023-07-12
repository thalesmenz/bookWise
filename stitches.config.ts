import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, keyframes, css, theme } =
  createStitches({
    theme: {
      fontSizes: {
        "6xl": "72px",
        "5xl": "60px",
        "4xl": "48px",
        "3xl": "36px",
        "2xl": "30px",
        "1xl": "24px",
        xl: "20px",
        lg: "18px",
        md: "16px",
        sm: "14px",
        xs: "12px",
      },
      lineHeights: {
        "6xl": "90px",
        "5xl": "72px",
        "4xl": "60px",
        "3xl": "44px",
        "2xl": "38px",
        "1xl": "32px",
        xl: "30px",
        lg: "28px",
        md: "24px",
        sm: "20px",
        xs: "18px",
      },
      fontWeights: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      colors: {
        gray900: "#101010",
        gray800: "#212121",
        gray700: "#424242",
        gray600: "#757575",
        gray500: "#9e9e9e",
        gray300: "#e0e0e0",
        gray200: "#f5f5f5",

        white: "#ffffff",
      },
      space: {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      zIndices: {
        bottom: -1,
        base: 1,
        top: 2,
        fixed: 3,
      },
    },
  });

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },

  body: {
    background: "$gray900",
    color: "$white",

    fontSize: "$md",
    lineHeight: "$md",
    fontWeight: "$regular",
  },

  button: {
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },
});
