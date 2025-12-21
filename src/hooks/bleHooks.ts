import { createContext, useContext } from "react";

interface BLEContextType {
  device: BluetoothDevice | null;
  server: BluetoothRemoteGATTServer | null;
  service: BluetoothRemoteGATTService | null;

  humidity: number;
  temperature: number;
  co2: number;

  gasUnits: string;
  humidityUnits: string;
  temperatureUnits: string;

  isConnected: boolean;
  isConnecting: boolean;

  connect: () => Promise<void>;
  disconnect: () => void;
}

export const BLEContext = createContext<BLEContextType | undefined>(undefined);

export function useBLE() {
  const ctx = useContext(BLEContext);
  if (!ctx) throw new Error("useBLE must be used inside BLEProvider");
  return ctx;
}
