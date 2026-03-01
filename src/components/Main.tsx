import { type ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode | Array<ReactNode> }) => (
  <main className="mx-auto mt-24 mb-0 w-[1200px]">{children}</main>
);
