import { Code, Skeleton } from "@radix-ui/themes";
import { ReadingData, SensorTable } from "../components/table/Table";
import { useGetHistoricData } from "../hooks/getHistoricDataHook";
// import { co2Uuid, humUuid, tempUuid } from "../services";

interface Reading {
  id: string;
  value: number;
  characteristic_id: string;
}
const COLUMNS = [
  {
    name: "CO2",
    label: "Gas",
  },
  {
    name: "temperature",
    label: "Temperature",
  },
  {
    name: "humidity",
    label: "Humidity",
  },
];

export const HistoricData = () => {
  const { data, isLoading, isError } = useGetHistoricData({
    take: 10,
    skip: 0,
  });
  console.log(data);
  if (isLoading) {
    return <Skeleton>Loading</Skeleton>;
  }
  if (isError || !Array.isArray(data?.reading)) {
    return <Code color="red">Error occured</Code>;
  }
  const dataByCharacteristics: Record<string, Array<Reading>> = {};
  for (const reading of data.reading) {
    if (!dataByCharacteristics[reading.characteristic_id]) {
      dataByCharacteristics[reading.characteristic_id] = [];
    }
    dataByCharacteristics[reading.characteristic_id].push(reading);
  }
  const normalizedData: Array<ReadingData> = [];
  return <SensorTable params={{ columns: COLUMNS, data: normalizedData }} />;
};
