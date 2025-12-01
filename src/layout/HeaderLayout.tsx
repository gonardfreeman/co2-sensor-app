import { BluetoothIcon } from "../components/BluetoothIcon";
import { Header } from "../components/Header";

import { NavHorizontal } from "../components/Nav";
import { Code, Heading1 } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";

export const HeaderLayout = () => {
  const { isConnected } = useBLE();
  return (
    <Header>
      <NavHorizontal $margin="0 1.25rem" $isSpread>
        <NavHorizontal>
          <Heading1>Sensor</Heading1>
        </NavHorizontal>
        <NavHorizontal>
          <BluetoothIcon $isConnected={isConnected} />
          <Code>{isConnected ? "Connected" : "Disconnected"}</Code>
        </NavHorizontal>
      </NavHorizontal>
    </Header>
  );
};
