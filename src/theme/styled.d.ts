import { type DefaultTheme } from "styled-components";
import { theme } from "./index";

type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
