import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "./components/app-layout";
import { ThemeProvider } from "./components/theme-provider";
import { AllCharacteristicsProvider } from "./contexts/allCharacteristicsContext";
import { BleProvider } from "./contexts/bleContext";
import { History } from "./features/history/History";
import { MainPage } from "./features/main/MainPage";
import { queryClient } from "./hooks/rcQuery";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AllCharacteristicsProvider>
            <BleProvider>
              <AppLayout>
                <Routes>
                  <Route index element=<MainPage /> />
                  <Route path="/history" element=<History /> />
                </Routes>
              </AppLayout>
              <ReactQueryDevtools initialIsOpen={false} />
            </BleProvider>
          </AllCharacteristicsProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
