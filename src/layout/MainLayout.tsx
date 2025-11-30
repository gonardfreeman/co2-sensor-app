import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "../components/Button";
import { Main } from "../components/Main";
import { useBLE } from "../hooks/bleHooks";

export const MainLayout = () => {
  const { connect } = useBLE();
  const connectMutation = useMutation({
    mutationFn: () => connect(),
  });
  const { data: humidity } = useQuery({
    queryKey: ["humidity"],
    initialData: 0,
    enabled: false,
  });
  const { data: temp } = useQuery({
    queryKey: ["temperature"],
    initialData: 0,
    enabled: false,
  });
  const { data: co2 } = useQuery({
    queryKey: ["co2"],
    initialData: 0,
    enabled: false,
  });
  const handleConnect = () => {
    connectMutation.mutate();
  };
  return (
    <Main>
      <Button $primary onClick={handleConnect}>
        Connect
      </Button>
      <div>{humidity}%</div>
      <div>{co2}PPM</div>
      <div>{temp}C</div>
    </Main>
  );
};
