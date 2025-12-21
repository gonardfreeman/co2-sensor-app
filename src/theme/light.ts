import { DefaultTheme } from "styled-components";
import { shadows } from "./shadows";

export const lightTheme: DefaultTheme = {
  mode: "light",
  shadows,

  colors: {
    // Brand
    primary: "oklch(55% 0.22 255)",
    primary85: "oklch(55% 0.22 255 / 85%)",
    primary65: "oklch(55% 0.22 255 / 65%)",
    primary45: "oklch(55% 0.22 255 / 45%)",
    secondary: "oklch(65% 0.20 55)",
    secondary85: "oklch(65% 0.20 55 / 85%)",
    secondary65: "oklch(65% 0.20 55 / 65%)",
    secondary45: "oklch(65% 0.20 55 / 45%)",
    tertiary: "oklch(65% 0.16 165)",

    // Background
    bg: "oklch(100% 0 0)",
    bgSecondary: "oklch(98% 0.01 255)",
    bgSecondaryDarker: "oklch(95% 0.015 255)",
    border: "oklch(90% 0.015 255)",

    // Text
    textPrimary: "oklch(0 0 0)",
    textSecondary: "oklch(35% 0.02 255)",
    textMuted: "oklch(55% 0.015 255)",
    textOpposite: "oklch(0.9624 0 14.08)",

    outline: "oklch(45% 50% 264deg)",

    white: "oklch(1 0 0)",
  },

  grayScale: {
    50: "oklch(98% 0.25% 264deg)",
    100: "oklch(12% 9.5% 264deg / 5%)",
    200: "oklch(12% 9% 264deg / 7%)",
    300: "oklch(12% 8.5% 264deg / 17%)",
    400: "oklch(12% 8% 264deg / 38%)",
    500: "oklch(12% 7.5% 264deg / 50%)",
    600: "oklch(12% 7% 264deg / 67%)",
    700: "oklch(12% 6% 264deg / 77%)",
    800: "oklch(12% 5% 264deg / 85%)",
    900: "oklch(12% 5% 264deg / 90%)",
    950: "oklch(12% 5% 264deg / 95%)",
  },

  disabled: {
    text: "oklch(65% 0.015 255)",
    bg: "oklch(92% 0.01 255)",
    border: "oklch(85% 0.015 255)",
    icon: "oklch(0.39 0 0)",
  },
};
