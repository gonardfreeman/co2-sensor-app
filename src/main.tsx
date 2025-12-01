import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/App.tsx";
import { GlobalStyle } from "./style.ts";
import { ThemeContextProvider } from "./contexts/themeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
