import { Table } from "@radix-ui/themes";

interface TableData {
  id: string;
  value: number;
  created_at: string;
  characteristic_id: string;
}

export function SensorTable({ data }: { data: Array<TableData> }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((d, idx) => (
          <Table.Row key={d.id}>
            <Table.RowHeaderCell>{idx + 1}</Table.RowHeaderCell>
            <Table.Cell>{d.value}</Table.Cell>
            <Table.Cell>{d.created_at}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
