import React from "react";
import { SensorContext } from "../hooks/sensorHooks";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "../graphql";
import { execute } from "../graphql/execute";

const SensorQuery = graphql(`
  query Sensor($name: String!) {
    sensor(name: $name) {
      id
      name
      unit {
        id
        name
        label
      }
    }
  }
`);

const getSensor = async (name: string) => execute(SensorQuery, { name });

export const SensorProvider: React.FC<{
  sensorName: string;
  children: React.ReactNode;
}> = ({ children, sensorName }) => {
  const { data, isLoading } = useQuery({
    queryKey: [sensorName],
    queryFn: () => getSensor(sensorName),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return null;
  }
  if (data === undefined || data?.sensor.length === 0) {
    return null;
  }
  const {
    id,
    name,
    unit: { id: unit_id, name: unit_name, label: unit_label },
  } = data.sensor[0];
  return (
    <SensorContext.Provider
      value={{
        id,
        name,
        unit_id,
        unit_name,
        unit_label,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
};
