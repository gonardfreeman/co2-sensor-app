import { GasReading } from "./components/GasReading";
import { HumidityReading } from "./components/HumidityReading";
import { TemperatureReading } from "./components/TemperatureReading";

export function MainPage() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <GasReading />
      <HumidityReading />
      <TemperatureReading />
    </div>
  );
}
