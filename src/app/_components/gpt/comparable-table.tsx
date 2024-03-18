import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { numberToCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    id: 1,
    building: "Chronicle",
    rent: 2000,
    psf: 3.5,
  },
  {
    id: 2,
    building: "Muro",
    rent: 2200,
    psf: 3.5,
  },
  {
    id: 3,
    building: "Yaletown 2000",
    rent: 2500,
    psf: 1.5,
  },
];

export default function ComparableTable() {
  return (
    <Table className="bg-white rounded-xl">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Comparables</TableHead>
          <TableHead>Rent</TableHead>
          <TableHead>PSF</TableHead>
          <TableHead>&nbsp;</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.building}</TableCell>
            <TableCell>{numberToCurrency(row.rent)}</TableCell>
            <TableCell>{numberToCurrency(row.psf)}</TableCell>
            <TableCell>
              <Button variant="ghost">View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
