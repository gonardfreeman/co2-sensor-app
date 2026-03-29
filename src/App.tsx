import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Routes, Route } from "react-router";

import { ThemeProvider } from "./components/theme-provider";

import { BleProvider } from "./contexts/bleContext";
import { queryClient } from "./hooks/rcQuery";
import { AllCharacteristicsProvider } from "./contexts/allCharacteristicsContext";

import { MainPage } from "./features/main/MainPage";
import { History } from "./features/history/History";
import { AppLayout } from "./components/app-layout";

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
