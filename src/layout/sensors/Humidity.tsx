import { SensorProvider } from "../../contexts/sensorContext";
import { PrevReading } from "../PrevReading";

export const HumiditySensor = () => {
  return (
    <SensorProvider sensorName="humidity_sensor">
      <PrevReading />
    </SensorProvider>
  );
};
