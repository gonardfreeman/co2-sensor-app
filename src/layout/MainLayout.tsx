import { Button } from "../components/Button";
import { Main } from "../components/Main";
import { useBLE } from "../hooks/bleHooks";

export const MainLayout = () => {
  const { connect, humidity, temperature, co2 } = useBLE();

  const handleConnect = async () => {
    await connect();
  };
  return (
    <Main>
      <Button $primary onClick={handleConnect}>
        Connect
      </Button>
      <div>{humidity}%</div>
      <div>{co2}PPM</div>
      <div>{temperature}C</div>
    </Main>
  );
};
