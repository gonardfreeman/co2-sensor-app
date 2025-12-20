import styled from "styled-components";
import { Tabs } from "@base-ui/react/tabs";

export const TabRoot = styled(Tabs.Root)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.375rem;
`;

export const TabList = styled(Tabs.List)`
  display: flex;
  position: relative;
  z-index: 0;
  padding-inline: 0.25rem;
  gap: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Tab = styled(Tabs.Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  appearance: none;
  color: ${({ theme }) => theme.colors.textOpposite};
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  user-select: none;
  white-space: nowrap;
  word-break: keep-all;
  padding-inline: 0.5rem;
  padding-block: 0;
  height: 2rem;

  &[data-active] {
    color: ${({ theme }) => theme.colors.textOpposite};
    background-color: ${({ theme }) => theme.colors.secondary};

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.textOpposite};
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  &:focus-visible {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      inset: 0.25rem 0;
      border-radius: 0.25rem;
      outline: 2px solid ${({ theme }) => theme.colors.outline};
      outline-offset: -1px;
    }
  }
`;

export const TabPanel = styled(Tabs.Panel)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  outline: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.outline};
    outline-offset: -1px;
    border-radius: 0.375rem;
  }

  &[hidden] {
    display: none;
  }
`;
