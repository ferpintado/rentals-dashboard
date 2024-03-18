import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PriceReportApartment } from "@/lib/types";
import dayjs from "dayjs";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type SuggestedGraphProps = {
  reports: PriceReportApartment[] | null;
};

export default function SuggestedGraph({ reports }: SuggestedGraphProps) {
  const chartData = reports?.map((report: any) => ({
    date: dayjs(report.date).format("MMM YY"),
    psf: report.psf,
  }));

  return (
    <Card>
      <CardHeader className="text-sm text-gray-400">Suggested</CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={300} min-width={300}>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 10,
              right: -20,
              left: -40,
              bottom: 30,
            }}
          >
            <Line type="monotone" dataKey="psf" stroke="#999" strokeWidth="2" />
            <CartesianGrid stroke="#eee" strokeDasharray="3" />
            <Tooltip />
            <XAxis dataKey="date" />
            <YAxis dataKey="psf" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
