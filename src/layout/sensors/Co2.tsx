import { SensorProvider } from "../../contexts/sensorContext";
import { PrevReading } from "../PrevReading";

export const Co2Sensor = () => {
  return (
    <SensorProvider sensorName="co2_sensor">
      <PrevReading />
    </SensorProvider>
  );
};
