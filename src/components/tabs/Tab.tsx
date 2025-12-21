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
  padding-inline: 0.85rem;
  padding-block: 0.85rem;
  gap: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows.surface};
`;

export const Tab = styled(Tabs.Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin: 0;
  outline: 0;
  appearance: none;
  background: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
  user-select: none;
  white-space: nowrap;
  word-break: keep-all;
  padding-inline: 0.5rem;
  padding-block: 0;
  height: 2rem;

  &[data-active] {
    color: ${({ theme }) => theme.colors.textOpposite};

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.textMuted};
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.textMuted};
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
  justify-content: flex-start;
  height: auto;
  outline: 0;
  padding: 0 0.85rem;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.outline};
    outline-offset: -1px;
    border-radius: 0.375rem;
  }

  &[hidden] {
    display: none;
  }
`;

export const TabIndicator = styled(Tabs.Indicator)`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 50%;
  translate: var(--active-tab-left) -50%;
  width: var(--active-tab-width);
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary65};
  transition-property: translate, width;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
`;
