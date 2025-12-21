import { useQuery } from "@tanstack/react-query";
import { execute } from "../graphql/execute";
import { graphql } from "../graphql";

interface PageInfo {
  take: number;
  skip: number;
}

const GetReadings = graphql(`
  query GetReadings($take: Int!, $skip: Int!) {
    reading(take: $take, skip: $skip) {
      id
      value
      characteristic_id
    }
  }
`);

export const useGetHistoricData = ({ take, skip }: PageInfo) => {
  return useQuery({
    queryKey: ["getReadings", take, skip],
    queryFn: () => execute(GetReadings, { take, skip }),
  });
};
