import { Flex, Switch, Text } from "@radix-ui/themes";
import { BluetoothIcon } from "../components/BluetoothIcon";
import { Header } from "../components/Header";

import { Heading1 } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";

export const HeaderLayout = () => {
  const { connect, disconnect, isConnected, isConnecting } = useBLE();
  const handleToggleBluetooth = async () => {
    if (isConnected) {
      disconnect();
      return;
    }
    await connect();
  };
  return (
    <Header>
      <div className="bg-sky-700">test</div>
      <Flex justify="between" p="4" className="p-4">
        <Flex>
          <Heading1>Sensor</Heading1>
        </Flex>
        <Flex aria-label={isConnected ? "Connected" : "Disconnected"}>
          <Flex gap="2" align="center">
            <Switch
              size="1"
              checked={isConnected}
              disabled={isConnecting}
              onClick={handleToggleBluetooth}
            />
            <Text color={isConnected ? "blue" : "gray"}>
              {isConnected ? "On" : "Off"}
            </Text>
            <BluetoothIcon $isConnected={isConnected} />
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};
