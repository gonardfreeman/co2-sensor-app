import { Button } from "../components/Button";
import { Horizontal, Vertical } from "../components/Grid";
import { Main } from "../components/Main";
import { useBLE } from "../hooks/bleHooks";

export const MainLayout = () => {
  const { connect, disconnect, humidity, temperature, co2, isConnected } =
    useBLE();

  const handleConnect = async () => {
    await connect();
  };
  const handleDisconnect = () => {
    disconnect();
  };
  return (
    <Main>
      <Horizontal $gap="0.5rem">
        <Button $primary onClick={handleConnect}>
          Connect
        </Button>
        <Button $primary onClick={handleDisconnect}>
          Disconnect
        </Button>
      </Horizontal>

      {isConnected && (
        <Vertical $gap="0.5rem">
          <div>Humidity: {humidity}%</div>
          <div>CO2: {co2}PPM</div>
          <div>Temperature: {temperature}C</div>
        </Vertical>
      )}
      {!isConnected && (
        <div>Device not connected, please click Connect button</div>
      )}
    </Main>
  );
};
