import { useQuery } from "@tanstack/react-query";
import { graphql } from "../graphql";
import { execute } from "../graphql/execute";

const ReadingsQuery = graphql(`
  query Readings {
    reading {
      id
      value
      sensor {
        name
        id
      }
    }
  }
`);

export const Readings = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reading"],
    queryFn: () => execute(ReadingsQuery),
  });
  if (isError) {
    return (
      <div>
        <h1>Some error occured</h1>
        <code>{error.name}</code>
        <code>{error.message}</code>
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <ul>
      {data?.reading.map((i) => (
        <li key={i.id}>
          Senor: {i.sensor.name} with {i.value}
        </li>
      ))}
    </ul>
  );
};
