import styled from "styled-components";
import Logo from "../icons/bluetooth.svg?react";

export const BluetoothIcon = styled(Logo)<{ $isConnected?: boolean }>`
  fill: ${({ theme, $isConnected }) =>
    $isConnected === true ? theme.colors.primary : theme.disabled.bg};
  width: 1.5rem;
  height: 1.5rem;
`;
