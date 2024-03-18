import { Skeleton } from "@/components/ui/skeleton";
import { AppContext } from "@/context/app-context";
import { getReportsByBuildingId } from "@/lib/api-requests";
import dayjs from "dayjs";
import { useContext } from "react";
import { useQuery } from "react-query";
import ActivityTable from "./reports/activity-table";
import SuggestedGraph from "./reports/suggested-graph";

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
            <SuggestedGraph reports={data} />
          </div>
        </>
      )}
    </div>
  );
}
