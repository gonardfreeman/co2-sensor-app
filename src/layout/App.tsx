import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Theme } from "@radix-ui/themes";

import { HeaderLayout } from "./HeaderLayout";
import { MainLayout } from "./MainLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { BleProvider } from "../contexts/bleContext";
import { queryClient } from "../hooks/rcQuery";
import { useThemeMode } from "../hooks/themeHook";
import { AllCharacteristicsProvider } from "../contexts/allCharacteristicsContext";

function App() {
  const { isDark } = useThemeMode();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <AllCharacteristicsProvider>
          <BleProvider>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
              <HeaderLayout />
              <MainLayout />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </BleProvider>
        </AllCharacteristicsProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
