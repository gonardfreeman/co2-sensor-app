import { createContext, useContext } from "react";

interface SensorContextType {
  id: string;
  name: string;
  unit_id: string;
  unit_name: string;
  unit_label: string;
}

export const SensorContext = createContext<SensorContextType | undefined>(
  undefined
);

export function useSensor() {
  const ctx = useContext(SensorContext);
  if (!ctx) throw new Error("useSensor must be used inside SensorProvider");
  return ctx;
}
