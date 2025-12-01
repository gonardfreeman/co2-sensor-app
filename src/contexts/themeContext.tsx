import { useState } from "react";
import { ThemeModeContext } from "../hooks/themeHook";

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <ThemeModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
