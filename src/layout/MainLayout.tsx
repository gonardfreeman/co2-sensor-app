import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "../components/Button";
import { Main } from "../components/Main";
import { useBLE } from "../hooks/bleHooks";
import { queryClient } from "../hooks/rcQuery";

export const MainLayout = () => {
  const { connect } = useBLE();
  const connectMutation = useMutation({
    mutationFn: () => connect(),
  });
  const { data: humidity } = useQuery({
    queryKey: ["humidity"],
    initialData: 0,
    enabled: false,
    queryFn: () => queryClient.getQueryData<number>(["humidity"]) ?? 0,
  });
  const { data: temp } = useQuery({
    queryKey: ["temperature"],
    initialData: 0,
    enabled: false,
    queryFn: () => queryClient.getQueryData<number>(["temperature"]) ?? 0,
  });
  const { data: co2 } = useQuery({
    queryKey: ["co2"],
    initialData: 0,
    enabled: false,
    queryFn: () => queryClient.getQueryData<number>(["co2"]) ?? 0,
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
