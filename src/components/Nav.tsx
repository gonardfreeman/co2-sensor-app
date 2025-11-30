import styled from "styled-components";

export const NavHorizontal = styled.nav<{ $margin?: string }>`
  display: flex;
  gap: 0.5rem;
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
`;
