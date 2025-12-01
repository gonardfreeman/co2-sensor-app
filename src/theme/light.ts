import { DefaultTheme } from "styled-components";
import { shadows } from "./shadows";

export const lightTheme: DefaultTheme = {
  mode: "light",
  shadows,
  colors: {
    // Brand
    primary: "#0082FC",
    secondary: "#FF8A34",
    tertiary: "#00C39A",

    // Background
    bg: "#FFFFFF",
    bgSecondary: "#F8F9FA",
    border: "#E2E8F0",

    // Text
    textPrimary: "#1A1A1A",
    textSecondary: "#4D4D4D",
    textMuted: "#7A7A7A",
  },
  disabled: {
    text: "#A8ADB5",
    bg: "#E5E7EB",
    border: "#D1D5DB",
    icon: "#C5C9CF",
  },
};
