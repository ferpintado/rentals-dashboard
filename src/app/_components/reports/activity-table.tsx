import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PriceReportAparment } from "@/lib/types";
import { numberToCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Decimal } from "@prisma/client/runtime/library";

type ActivityTableProps = {
  reports: PriceReportAparment[] | null;
};

export default function ActivityTable({ reports }: ActivityTableProps) {
  if (!reports) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Rent</TableHead>
          <TableHead>PSF</TableHead>
          <TableHead>&nbsp;</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">
              <Badge variant="destructive">Past</Badge>
            </TableCell>
            <TableCell>{report.apartment.unit}</TableCell>
            <TableCell>{report.apartment.type}</TableCell>
            <TableCell>{numberToCurrency(report.price)}</TableCell>
            <TableCell>{numberToCurrency(report.psf)}</TableCell>
            <TableCell>
              <Button variant="ghost">View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
