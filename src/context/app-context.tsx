import { TaskBuilding } from "@/lib/types";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const AppContext = createContext<{
  activeTask: TaskBuilding | null;
  setActiveTask: (task: TaskBuilding | null) => void;
}>({} as any);

export function AppProvider({ children }: Props) {
  const [activeTask, setActiveTask] = useState<TaskBuilding | null>(null);

  const value = {
    activeTask,
    setActiveTask,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
