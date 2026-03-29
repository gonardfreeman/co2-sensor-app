import { graphql } from "../graphql";
import { execute } from "../graphql/execute";

type CreateReadingInput = {
  value: number;
  characteristic_id: string;
};

const SaveReading = graphql(`
  mutation SaveReading($value: Int!, $characteristic_id: String!) {
    createReading(value: $value, characteristic_id: $characteristic_id) {
      id
      value
      characteristic_id
    }
  }
`);

export const saveReading = async ({ value, characteristic_id }: CreateReadingInput) =>
  execute(SaveReading, { value, characteristic_id });
