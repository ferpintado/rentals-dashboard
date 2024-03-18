import { useQuery } from "react-query";
import TaskCard from "./task-card";
import { groupTasksByType } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Task } from "@prisma/client";
import { getTasks } from "@/lib/api-requests";

export default function TaskManager() {
  const { data, isLoading } = useQuery<Task[]>("tasks", getTasks);

  const groupedTasks = groupTasksByType(data);

  return (
    <div className="w-1/5 h-full p-7">
      <div className="mb-8">
        <h1 className="uppercase">Revenue manager</h1>
      </div>
      {isLoading ? (
        <>
          <Skeleton className="h-[150px] w-full rounded-xl mb-4" />
          <Skeleton className="h-[150px] w-full rounded-xl mb-4" />
        </>
      ) : (
        Object.entries(groupedTasks).map(([type, tasks]) => (
          <TaskCard key={type} type={type} tasks={tasks} />
        ))
      )}
    </div>
  );
}
