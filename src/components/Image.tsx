import styled from "styled-components";

export const Image = styled.img<{ $width: string; $height?: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $width, $height }) => ($height ? $height : $width)};
`;
