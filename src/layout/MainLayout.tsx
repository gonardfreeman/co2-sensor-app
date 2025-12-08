import { Horizontal, Vertical } from "../components/Grid";
import { Main } from "../components/Main";
import { Code } from "../components/Text";
import { useBLE } from "../hooks/bleHooks";
import { BleActions } from "./BleActionsLayout";
import { Co2Sensor, HumiditySensor, TemperatureSensor } from "./sensors";

export const MainLayout = () => {
  const { isConnected, humidity, temperature, co2 } = useBLE();
  return (
    <Main>
      <Vertical $gap="0.5rem">
        {isConnected && (
          <Vertical $gap="0.5rem">
            <div>Humidity: {humidity}%</div>
            <div>CO2: {co2}PPM</div>
            <div>Temperature: {temperature}C</div>
          </Vertical>
        )}
        {!isConnected && (
          <Code>Device not connected, please click Connect button</Code>
        )}

        <BleActions />
        <Horizontal $gap="0.5rem;">
          <Co2Sensor />
          <HumiditySensor />
          <TemperatureSensor />
        </Horizontal>
      </Vertical>
    </Main>
  );
};
