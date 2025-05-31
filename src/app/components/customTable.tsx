import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CustomTableProps {
  headers: string[];
  rows: Array<Array<React.ReactNode>>;
}

export const CustomTable = ({ headers, rows }: CustomTableProps) => (
  <Table className="border border-[#EDEEF0]">
    <TableHeader className="bg-[#ebebeb] text-[#475367] h-[50px] text-xs 2xl:text-lg">
      <TableRow>
        {headers.map((header, id) => (
          <TableHead key={id}>{header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row, rowId) => (
        <TableRow key={rowId}>
          {row.map((cell, cellId) => (
            <TableCell
              key={cellId}
              className="text-textBlue1 h-[50px] font-semibold 2xl:text-sm text-xs text-gray-700"
            >
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
