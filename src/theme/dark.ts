import { DefaultTheme } from "styled-components";
import { shadows } from "./shadows";

export const darkTheme: DefaultTheme = {
  mode: "dark",
  shadows,
  colors: {
    // Brand (dark-optimized tones)
    primary: "#4CA3FF",
    secondary: "#FFB46A",
    tertiary: "#4EDFC4",

    // Background
    bg: "#0F172A", // main dark
    bgSecondary: "#1E293B", // cards / surfaces
    border: "#2D3A4D",

    // Text
    textPrimary: "#F1F5F9",
    textSecondary: "#CBD5E1",
    textMuted: "#94A3B8",
  },
  disabled: {
    text: "#6B7280",
    bg: "#374151",
    border: "#4B5563",
    icon: "#525A65",
  },
};
