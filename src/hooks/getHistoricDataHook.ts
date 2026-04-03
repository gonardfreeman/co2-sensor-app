import { useQuery } from "@tanstack/react-query";

import { graphql } from "../graphql";
import { execute } from "../graphql/execute";

interface PageInfo {
  take: number;
  skip: number;
  characteristic_id: string;
}

const GetReadings = graphql(`
  query GetReadings($take: Int!, $skip: Int!, $characteristic_id: String!) {
    readings(take: $take, skip: $skip, params: { characteristic_id: $characteristic_id }) {
      id
      value
      created_at
      characteristic_id
    }
  }
`);

export const useGetHistoricData = ({ take, skip, characteristic_id }: PageInfo) => {
  return useQuery({
    queryKey: ["getReadings", characteristic_id, take, skip],
    queryFn: () => execute(GetReadings, { characteristic_id, take, skip }),
  });
};
