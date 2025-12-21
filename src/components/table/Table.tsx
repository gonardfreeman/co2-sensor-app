import styled from "styled-components";

const Table = styled.table`
  padding: 0.25rem 0.5rem;
  font-family: "IBM Plex Mono", monospace;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
const TableBody = styled.tbody`
  margin: 0;
  font-family: inherit;
`;
const TableHeader = styled.thead`
  padding: 0.25rem 0.5rem;
  font-family: inherit;
`;
const TableHead = styled.th`
  margin: 0;
  text-align: left;
  font-weight: 700;
  font-family: inherit;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bgSecondaryDarker};
`;

const BaseRow = styled.tr`
  font-family: inherit;
  padding: 0.25rem 0.5rem;
`;

const TableRow = styled(BaseRow)`
  font-family: inherit;
  padding: 0.25rem 0.5rem;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
  }
`;

const TableCell = styled.td`
  margin: 0;
  text-align: left;
  font-family: inherit;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

interface Column {
  name: string;
  label: string;
}

export interface ReadingData {
  co2: number;
  temp: number;
  humidity: number;
}
interface TableData {
  columns: Array<Column>;
  data: Array<ReadingData>;
}

const Head = ({ columns }: { columns: Array<Column> }) =>
  columns.map((col) => <TableHead key={col.name}>{col.label}</TableHead>);

const Body = ({ data }: { data: Array<ReadingData> }) =>
  data.map((d) => <DataRow row={d} />);

const DataRow = ({ row }: { row: ReadingData }) => {
  return (
    <TableRow>
      <TableCell>{row.co2}</TableCell>
      <TableCell>{row.temp}</TableCell>
      <TableCell>{row.humidity}</TableCell>
    </TableRow>
  );
};

export function SensorTable({ params }: { params: TableData }) {
  const { columns, data } = params;
  return (
    <Table>
      <TableHeader>
        <BaseRow>
          <Head columns={columns} />
        </BaseRow>
      </TableHeader>
      <TableBody>
        <Body data={data} />
      </TableBody>
    </Table>
  );
}
