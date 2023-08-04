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
        white: "#ffffff",
        black: "#000000",

        green100: "#50B2C0",
        green200: "#255D6A",
        green300: "#0A313C",

        purple100: "#8381D9",
        purple200: "#2A2879",

        gray100: "#F8F9FC",
        gray200: "#E6E8F2",
        gray300: "#D1D6E4",
        gray400: "#8D95AF",
        gray500: "#303F73",
        gray600: "#252D4A",
        gray700: "#181C2A",
        gray800: "#0E1116",

        gradientVertical: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        gradientHorizontal: `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
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

  html: {
    height: '100%',
  },

  body: {
    height: '100%',

    background: "$gray800",
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
