import "styled-components";

type Scale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      primary: string;
      primary85: string;
      primary65: string;
      primary45: string;
      secondary: string;
      secondary85: string;
      secondary65: string;
      secondary45: string;
      tertiary: string;
      bg: string;
      bgSecondary: string;
      bgSecondaryDarker: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      textOpposite: string;
      outline: string;

      white: string;
    };
    disabled: {
      text: string;
      bg: string;
      border: string;
      icon: string;
    };
    shadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      inner: string;
      none: string;
      surface: string;
    };
    grayScale: Record<Scale, string>;
  }
}
