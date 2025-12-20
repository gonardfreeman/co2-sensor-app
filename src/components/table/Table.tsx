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
const TableRow = styled.tr`
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

interface TableData<IColumns, IData> {
  columns: Array<IColumns>;
  data: Array<IData>;
}

export function SensorTable<IColumns, IData>({
  params,
}: {
  params: TableData<IColumns, IData>;
}) {
  console.log(params);
  return (
    <Table>
      <TableHeader>
        <TableHead>Header</TableHead>
        <TableHead>Header1</TableHead>
        <TableHead>Header2</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
