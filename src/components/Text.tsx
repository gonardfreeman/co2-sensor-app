import styled from "styled-components";

export const Code = styled.pre`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: "IBM Plex Mono", monospace;
`;

export const Heading1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
