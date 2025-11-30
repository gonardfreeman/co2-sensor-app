export const theme = {
  // === Brand Colors ===
  primary: "#47ae93", // your main color
  primaryLight: "#6bcab0",
  primaryDark: "#2c6e5d",

  // === Functional Colors ===
  secondary: "#4a7bd0",
  secondaryLight: "#6fa1f0",
  secondaryDark: "#325694",

  blueTooth: "#0082fc",

  success: "#3ebf67",
  successLight: "#7add98",
  successDark: "#2c8a48",

  warning: "#f2b33d",
  warningLight: "#ffd67a",
  warningDark: "#b57f1c",

  error: "#e5564d",
  errorLight: "#ff8a83",
  errorDark: "#a32f29",

  info: "#47a5e5",
  infoLight: "#7ec6ff",
  infoDark: "#2e79a8",

  // === Grayscale ===
  black: "#0f0f0f",
  darkGray: "#333",
  gray: "#777",
  lightGray: "#ccc",
  white: "#ffffff",

  // === Backgrounds ===
  background: "#f4f9f7", // very light greenish-white
  backgroundSecondary: "#e8f4f1", // slightly darker variant
  backgroundDark: "#0f1d19",
  backgroundDisabled: "#a0a0a0",
  backgroundDarkDisabled: "#555",

  // === Text ===
  text: "#1a1a1a", // default dark text
  textLight: "#fafafa",
  textMuted: "#6c6c6c",
  textOnPrimary: "#ffffff",
  textDisabled: "#eee",
  textLightDisabled: "#aaa",

  // === Border / Shadow ===
  border: "#d4ede7",
  borderDark: "#2c6e5d",

  shadow: "0px 2px 8px rgba(71, 174, 147, 0.25)",

  // === Radiuses, sizing, fonts (optional) ===
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
  },

  spacing: (n: number) => `${n * 8}px`,
} as const;
