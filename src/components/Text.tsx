import styled from "styled-components";

export const Code = styled.pre<{ $inverse?: boolean }>`
  color: ${({ theme, $inverse }) =>
    $inverse ? theme.textOnPrimary : theme.text};
  font-family: "IBM Plex Mono", monospace;
`;

export const Heading1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
`;
