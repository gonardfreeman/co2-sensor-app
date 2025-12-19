import { Horizontal, Vertical } from "../components/Grid";
import { Main } from "../components/Main";
import { SensorTable } from "../components/table/Table";
import { Code } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";
import { BleActions } from "./BleActionsLayout";
import { Co2Sensor, HumiditySensor, TemperatureSensor } from "./sensors";

export const MainLayout = () => {
  const { isConnected } = useBLE();
  return (
    <Main>
      <Vertical $gap="0.5rem">
        {isConnected && (
          <>
            <Horizontal $gap="0.5rem;">
              <Co2Sensor />
              <HumiditySensor />
              <TemperatureSensor />
            </Horizontal>
          </>
        )}
        {!isConnected && (
          <Code>Device not connected, please click Connect button</Code>
        )}
        <BleActions />
        <SensorTable />
      </Vertical>
    </Main>
  );
};
