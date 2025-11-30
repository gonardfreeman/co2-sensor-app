import styled from "styled-components";

export const Header = styled.header`
  padding: 0.75rem 0.5rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.background};
`;
