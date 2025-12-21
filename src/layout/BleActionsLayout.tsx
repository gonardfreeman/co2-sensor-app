import { Button } from "../components/Button";
import { useBLE } from "../hooks/bleHooks";

export const BleActions = () => {
  const { connect, disconnect, isConnected } = useBLE();
  const handleAction = async () => {
    if (isConnected) {
      disconnect();
      return;
    }
    await connect();
  };
  return (
    <Button $primary onClick={handleAction}>
      {isConnected ? "Disconnect" : "Connect"}
    </Button>
  );
};
