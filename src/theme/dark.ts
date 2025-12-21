import { DefaultTheme } from "styled-components";
import { shadows } from "./shadows";

export const darkTheme: DefaultTheme = {
  mode: "dark",
  shadows,
  colors: {
    // Brand (dark-optimized tones)
    primary: "oklch(0.704 0.159 252.2)",
    primary85: "oklch(0.704 0.159 252.2 / 85%)",
    primary65: "oklch(0.704 0.159 252.2 / 65%)",
    primary45: "oklch(0.704 0.159 252.2 / 45%)",
    secondary: "oklch(0.826 0.126 64.2)",
    secondary85: "oklch(0.826 0.126 64.2 / 85% )",
    secondary65: "oklch(0.826 0.126 64.2 / 65% )",
    secondary45: "oklch(0.826 0.126 64.2 / 65% )",
    tertiary: "oklch(0.820 0.129 178.1)",

    // Background
    bg: "oklch(0.208 0.040 265.8)", // main dark
    bgSecondary: "oklch(0.279 0.037 260.0)", // cards / surfaces
    bgSecondaryDarker: "oklch(0.323 0.042 259.8)",
    border: "oklch(0.345 0.038 257.8)",

    // Text
    textPrimary: "oklch(0.968 0.007 247.9)",
    textSecondary: "oklch(0.869 0.020 252.9)",
    textMuted: "oklch(0.711 0.035 256.8)",
    textOpposite: "oklch(0 0 0)",

    outline: "oklch(69% 50% 264deg)",
    white: "oklch(0 0 0)",
  },
  disabled: {
    text: "oklch(0.551 0.023 264.4)",
    bg: "oklch(0.373 0.031 259.7)",
    border: "oklch(0.446 0.026 256.8)",
    icon: "oklch(0.465 0.021 256.4)",
  },
  grayScale: {
    50: "oklch(17% 0.25% 264deg)",
    100: "oklch(28% 0.75% 264deg / 65%)",
    200: "oklch(29% 0.75% 264deg / 80%)",
    300: "oklch(35% 0.75% 264deg / 80%)",
    400: "oklch(47% 0.875% 264deg / 80%)",
    500: "oklch(64% 1% 264deg / 80%)",
    600: "oklch(82% 1% 264deg / 80%)",
    700: "oklch(92% 1.125% 264deg / 80%)",
    800: "oklch(93% 0.875% 264deg / 85%)",
    900: "oklch(95% 0.5% 264deg / 90%)",
    950: "oklch(94% 0.375% 264deg / 95%)",
  },
};
