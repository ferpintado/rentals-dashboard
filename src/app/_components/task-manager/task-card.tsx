import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { AppContext } from "@/context/app-context";
import { TaskBuilding } from "@/lib/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useContext } from "react";

type TaskCardProps = {
  type: string;
  tasks: any[];
};

type CardTitles = {
  [key: string]: string;
};

const CARD_TITLES: CardTitles = {
  PRICING: "Price available units",
  ACTIVITY: "Activity report",
  MARKET_SURVEY: "Market survey",
};

export default function TaskCard({ type, tasks }: TaskCardProps) {
  const { activeTask, setActiveTask } = useContext(AppContext);

  const onCheckboxChange = (checked: CheckedState, task: TaskBuilding) => {
    setActiveTask(checked ? task : null);
  };

  if (!tasks.length) return null;

  return (
    <Card className="mb-4">
      <CardHeader className="p-4 flex flex-row">
        <div className="w-1/5">
          <div className="w-[24px] h-[24px] bg-green-200 border-2 border-green-500 rounded-full mt-1.5"></div>
        </div>
        <CardTitle className="text-base font-medium w-4/5 mt-0">
          {CARD_TITLES[type]}
          <CardDescription className="font-normal text-green-500">
            {tasks.length} {tasks.length > 1 ? "tasks" : "task"}
          </CardDescription>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 mx-auto flex flex-col space-y-2 justify-items-end">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-4 w-4/5">
            <Checkbox
              id={`${type}_checkbox_${task.id}`}
              className="rounded-full border-gray-200"
              onCheckedChange={(checked: CheckedState) =>
                onCheckboxChange(checked, task)
              }
              checked={activeTask === task}
            />
            <label
              htmlFor={`${type}_checkbox_${task.id}`}
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {task.building.name}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
