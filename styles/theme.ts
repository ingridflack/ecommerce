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
  },
  fontSize: {
    small: "0.75rem",
    medium: "0.875rem",
    normal: "1rem",
    large: "1.5rem",
  },
} as const;

export type Theme = typeof theme;

export default theme;
