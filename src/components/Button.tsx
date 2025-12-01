import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) =>
    props.$primary
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecondary};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  cursor: pointer;
  &:disabled {
    background: ${(props) => props.theme.disabled.bg};
    color: ${(props) => props.theme.disabled.text};
    border: ${(props) => props.theme.disabled.border};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
