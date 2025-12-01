import { createContext, useContext } from "react";

type ThemeModeContext = {
  isDark: boolean;
  toggleDark: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContext | undefined>(
  undefined
);

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeModeProvider");
  }
  return ctx;
};
