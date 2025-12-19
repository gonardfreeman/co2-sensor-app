import { SensorProvider } from "../../contexts/sensorContext";
import { useBLE } from "../../hooks/bleHooks";
import { Reading } from "../Reading";

export const Co2Sensor = () => {
  const { co2 } = useBLE();
  return (
    <SensorProvider sensorName="co2_sensor">
      <Reading value={co2} />
    </SensorProvider>
  );
};
