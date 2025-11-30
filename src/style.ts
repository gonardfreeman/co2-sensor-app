import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  ${reset}
  body {
      font-family: "Inter", sans-serif;
      font-optical-sizing: auto;
      font-style: normal;
  }
`;
