import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.$primary
      ? props.theme.backgroundSecondary
      : props.theme.backgroundDark};
  color: ${(props) =>
    props.$primary ? props.theme.text : props.theme.textLight};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 3px;
  &:disabled {
    background: ${(props) =>
      props.$primary
        ? props.theme.backgroundDisabled
        : props.theme.backgroundDarkDisabled};
    color: ${(props) =>
      props.$primary
        ? props.theme.textDisabled
        : props.theme.textLightDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
