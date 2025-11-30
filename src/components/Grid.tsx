import styled from "styled-components";

export const Horizontal = styled.div<{ $gap?: string }>`
  display: flex;
  gap: ${({ $gap = "0.5rem" }) => $gap};
`;

export const Vertical = styled(Horizontal)`
  flex-direction: column;
`;
