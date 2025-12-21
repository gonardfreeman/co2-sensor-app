import { createContext, useContext } from "react";

interface Characteristics {
  id: string;
  name: string;
  unit: string;
}

type CharacteristicsContextType = Record<string, Characteristics>;

export const CharacteristicsContext = createContext<
  CharacteristicsContextType | undefined
>(undefined);

export function useCharacteristics() {
  const ctx = useContext(CharacteristicsContext);
  if (!ctx) throw new Error("useSensor must be used inside SensorProvider");
  return ctx;
}
