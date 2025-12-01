import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      bg: string;
      bgSecondary: string;
      border: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
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
  }
}
