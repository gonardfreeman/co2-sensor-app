import styled from "styled-components";
import { Button as BaseButton } from "@base-ui/react/button";

export const Button = styled(BaseButton)<{ $primary?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.875rem;
  margin: 0;
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
  background-color: ${({ theme, $primary = true }) =>
    $primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textOpposite};

  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;

  @media (hover: hover) {
    &:hover:not([data-disabled]) {
      background-color: ${({ theme, $primary = true }) =>
        $primary ? theme.colors.primaryHover : theme.colors.secondaryHover};
    }
  }

  cursor: pointer;
  &:disabled {
    background: ${(props) => props.theme.disabled.bg};
    color: ${(props) => props.theme.disabled.text};
    border: ${(props) => props.theme.disabled.border};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.outline};
    outline-offset: -1px;
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.disabled.text};
  }
`;
