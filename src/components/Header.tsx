import styled from "styled-components";

export const Header = styled.header`
  padding: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: auto;
  box-shadow: ${({ theme }) => theme.shadows.surface};
  color: ${({ theme }) => theme.colors.textOpposite};
  background-color: ${({ theme }) => theme.colors.white};
`;
