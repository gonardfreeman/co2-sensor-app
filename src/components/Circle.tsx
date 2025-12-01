import styled from "styled-components";

export const Circle = styled.div<{ $size: string; $isPrimary: boolean }>`
  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.primary : theme.colors.secondary};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;
