import { QueryClientProvider } from "@tanstack/react-query";

import { HeaderLayout } from "./HeaderLayout";
import { MainLayout } from "./MainLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { BLEProvider } from "../contexts/bleContext";
import { queryClient } from "../hooks/rcQuery";

function App() {
  return (
    <BLEProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HeaderLayout />
          <MainLayout />
        </ThemeProvider>
      </QueryClientProvider>
    </BLEProvider>
  );
}

export default App;
