import styled from "styled-components";

export const Circle = styled.div<{ $size: string; $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow};
`;
