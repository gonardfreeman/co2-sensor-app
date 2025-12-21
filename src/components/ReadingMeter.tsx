import styled from "styled-components";
import { Meter } from "@base-ui/react/meter";

export const MeterRoot = styled(Meter.Root)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;
  width: 12rem;
`;

export const MeterLabel = styled(Meter.Label)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.grayScale[900]};
`;

export const MeterValue = styled(Meter.Value)`
  grid-column-start: 2;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.grayScale[900]};
  text-align: right;
`;

export const MeterTrack = styled(Meter.Track)`
  grid-column: 1 / 3;
  overflow: hidden;
  background-color: ${({ theme }) => theme.grayScale[100]};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.grayScale[200]};
  height: 0.5rem;
`;

export const MeterIndicator = styled(Meter.Indicator)`
  background-color: ${({ theme }) => theme.grayScale[500]};
  transition: width 500ms;
`;
