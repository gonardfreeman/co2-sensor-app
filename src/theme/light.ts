import { DefaultTheme } from "styled-components";
import { shadows } from "./shadows";

export const lightTheme: DefaultTheme = {
  mode: "light",
  shadows,

  colors: {
    // Brand
    primary: "oklch(55% 0.22 255)",
    primaryHover: "oklch(55% 0.22 255 / 85%)",
    secondary: "oklch(65% 0.20 55)",
    secondaryHover: "oklch(65% 0.20 55 / 85%)",
    tertiary: "oklch(65% 0.16 165)",

    // Background
    bg: "oklch(100% 0 0)",
    bgSecondary: "oklch(98% 0.01 255)",
    bgSecondaryDarker: "oklch(95% 0.015 255)",
    border: "oklch(90% 0.015 255)",

    // Text
    textPrimary: "oklch(20% 0.02 255)",
    textSecondary: "oklch(35% 0.02 255)",
    textMuted: "oklch(55% 0.015 255)",
    textOpposite: "oklch(0.9624 0 14.08)",

    outline: "oklch(45% 50% 264deg)",
  },

  disabled: {
    text: "oklch(65% 0.015 255)",
    bg: "oklch(92% 0.01 255)",
    border: "oklch(85% 0.015 255)",
    icon: "oklch(70% 0.015 255)",
  },
};
