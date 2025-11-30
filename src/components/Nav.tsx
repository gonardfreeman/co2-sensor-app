import styled from "styled-components";

export const NavHorizontal = styled.nav<{
  $margin?: string;
  $isSpread?: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  justify-content: ${({ $isSpread }) =>
    $isSpread ? "space-between" : "flex-start"};
`;
