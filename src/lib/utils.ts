import { Task } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupTasksByType(tasks: Task[] | undefined) {
  if (!tasks) {
    return {};
  }

  return tasks.reduce((acc, task) => {
    if (!acc[task.type]) {
      acc[task.type] = [];
    }

    acc[task.type].push(task);

    return acc;
  }, {} as Record<string, Task[]>);
}

export function numberToCurrency(number: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}
