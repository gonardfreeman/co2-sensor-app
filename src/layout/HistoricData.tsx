import { Code, Flex, SegmentedControl, Spinner } from "@radix-ui/themes";
import { SensorTable } from "../components/table/Table";
import { useGetHistoricData } from "../hooks/getHistoricDataHook";
import { co2Uuid, humUuid, tempUuid } from "../services";
import { useState } from "react";

export const HistoricData = () => {
  const [currentView, setCurrentView] = useState<string>(co2Uuid);
  const { data, isLoading, isError } = useGetHistoricData({
    take: 10,
    skip: 0,
    characteristic_id: currentView,
  });
  if (isLoading) {
    return <Spinner>Loading</Spinner>;
  }
  if (isError || !Array.isArray(data?.readings)) {
    return <Code color="red">Error occured</Code>;
  }
  return (
    <Flex direction="column">
      <SegmentedControl.Root defaultValue={currentView}>
        <SegmentedControl.Item
          onClick={() => {
            setCurrentView(co2Uuid);
          }}
          value={co2Uuid}
        >
          CO2
        </SegmentedControl.Item>
        <SegmentedControl.Item
          onClick={() => {
            setCurrentView(humUuid);
          }}
          value={humUuid}
        >
          Temperature
        </SegmentedControl.Item>
        <SegmentedControl.Item
          onClick={() => {
            setCurrentView(tempUuid);
          }}
          value={tempUuid}
        >
          Humidity
        </SegmentedControl.Item>
      </SegmentedControl.Root>
      <SensorTable data={data.readings} />
    </Flex>
  );
};
