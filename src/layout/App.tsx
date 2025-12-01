import { QueryClientProvider } from "@tanstack/react-query";

import { HeaderLayout } from "./HeaderLayout";
import { MainLayout } from "./MainLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { BLEProvider } from "../contexts/bleContext";
import { queryClient } from "../hooks/rcQuery";
import { useThemeMode } from "../hooks/themeHook";

function App() {
  const { isDark } = useThemeMode();
  return (
    <BLEProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <HeaderLayout />
          <MainLayout />
        </ThemeProvider>
      </QueryClientProvider>
    </BLEProvider>
  );
}

export default App;
