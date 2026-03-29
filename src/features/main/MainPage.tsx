import { GasReading } from "./components/GasReading";

export function MainPage() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <GasReading />
    </div>
  );
}
