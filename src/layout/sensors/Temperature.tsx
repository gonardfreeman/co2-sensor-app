import { SensorProvider } from "../../contexts/sensorContext";
import { useBLE } from "../../hooks/bleHooks";
import { Reading } from "../Reading";

export const TemperatureSensor = () => {
  const { temperature } = useBLE();
  return (
    <SensorProvider sensorName="temperature_sensor">
      <Reading value={temperature} />
    </SensorProvider>
  );
};
