const theme = {
  colors: {
    background: "#fbfefd",

    gray: {
      white: "#FFFFFF",
      platinum: "#e1e1e6",
      silver: "#a8a8b3",
      dark: "#141414",
    },

    primary: "#52b591",
    primaryDark: "#49a282",
  },
  fontSize: {
    small: "0.75rem",
    medium: "0.875rem",
    normal: "1rem",
    large: "1.5rem",
  },
  spacings: {
    tiny: "0.4rem",
    small: "0.8rem",
    medium: "1rem",
    big: "2rem",
  },
} as const;

export type Theme = typeof theme;

export default theme;
