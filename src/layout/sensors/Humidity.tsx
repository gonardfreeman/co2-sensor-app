import { SensorProvider } from "../../contexts/sensorContext";
import { useBLE } from "../../hooks/bleHooks";
import { Reading } from "../Reading";

export const HumiditySensor = () => {
  const { humidity } = useBLE();
  return (
    <SensorProvider sensorName="humidity_sensor">
      <Reading value={humidity} />
    </SensorProvider>
  );
};
