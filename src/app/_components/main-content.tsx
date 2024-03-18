import { Skeleton } from "@/components/ui/skeleton";
import { AppContext } from "@/context/app-context";
import { getReportsByBuildingId } from "@/lib/api-requests";
import dayjs from "dayjs";
import { useContext } from "react";
import { useQuery } from "react-query";
import ActivityTable from "./reports/activity-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MainContent() {
  const { activeTask } = useContext(AppContext);
  const { data, isLoading } = useQuery(
    ["reports", activeTask?.id],
    () => {
      return activeTask && getReportsByBuildingId(activeTask.id);
    },
    {
      enabled: !!activeTask,
    }
  );

  const chartData = data?.map((report: any) => ({
    date: dayjs(report.date).format("MMM YY"),
    psf: report.psf,
  }));

  if (!activeTask) return null;

  return (
    <div className="w-2/5 h-full overflow-auto">
      <div className="flex items-center justify-between p-7 sticky top-0 bg-white z-10">
        <h2 className="text-2xl font-normal">{activeTask.building.name}</h2>
        <p className="text-sm text-gray-400">
          {dayjs().format("MMMM D, YYYY")}
        </p>
      </div>
      {isLoading ? (
        <div className="p-7">
          <Skeleton className="h-[150px] w-full rounded-xl" />
        </div>
      ) : (
        <>
          <div className="border-b border-gray-200 mb-4 p-7 pb-9">
            <ActivityTable reports={data} />
          </div>
          <div className="p-10">
            <Card>
              <CardHeader className="text-sm text-gray-400">
                Suggested
              </CardHeader>
              <CardContent>
                <ResponsiveContainer
                  width={"100%"}
                  height={300}
                  min-width={300}
                >
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
                    <Line
                      type="monotone"
                      dataKey="psf"
                      stroke="#999"
                      strokeWidth="2"
                    />
                    <CartesianGrid stroke="#eee" strokeDasharray="3" />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="psf" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
