import { BluetoothConnected, BluetoothOff } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useBLE } from "@/hooks/bleHooks";

export function BleToggle() {
  const { connect, disconnect, isConnected, isConnecting } = useBLE();
  const handleToggleBle = async () => {
    if (isConnected) {
      disconnect();
      return;
    }
    await connect();
  };
  return (
    <Toggle
      aria-label="Toggle bluetooth"
      size="lg"
      onClick={handleToggleBle}
      disabled={isConnecting}
    >
      {!isConnected && <BluetoothOff className="group-aria-pressed/toggle:fill-foreground" />}
      {isConnected && <BluetoothConnected />}
    </Toggle>
  );
}
