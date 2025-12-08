import { SensorProvider } from "../../contexts/sensorContext";
import { PrevReading } from "../PrevReading";

export const TemperatureSensor = () => {
  return (
    <SensorProvider sensorName="temperature_sensor">
      <PrevReading />
    </SensorProvider>
  );
};
