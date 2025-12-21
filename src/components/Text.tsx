import styled from "styled-components";
import { Heading } from "@radix-ui/themes";

export const Code = styled.pre`
  font-family: "IBM Plex Mono", monospace;
  color: inherit;
`;

export const Heading1 = styled(Heading)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
