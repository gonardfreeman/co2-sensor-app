import React from "react";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "../graphql";
import { execute } from "../graphql/execute";
import { CharacteristicsContext } from "../hooks/characteristicsHook";

const AllCharacteristicQuery = graphql(`
  query AllCharacteristics {
    characteristics {
      id
      name
      unit
    }
  }
`);

const getAllSensor = async () => execute(AllCharacteristicQuery);

export const AllCharacteristicsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["characteristics"],
    queryFn: () => getAllSensor(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return null;
  }

  if (data === undefined || data?.characteristics.length === 0) {
    return null;
  }
  let characteristicsByName = {};
  for (const characteristic of data.characteristics) {
    characteristicsByName = {
      ...characteristicsByName,
      [characteristic.id]: characteristic,
    };
  }

  return (
    <CharacteristicsContext.Provider value={characteristicsByName}>
      {children}
    </CharacteristicsContext.Provider>
  );
};
