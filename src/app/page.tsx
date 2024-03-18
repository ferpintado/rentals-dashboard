"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import TaskManager from "./_components/task-manager";
import MainContent from "./_components/main-content";
import Gpt from "./_components/gpt";
import { AppProvider } from "@/context/app-context";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="h-screen flex items-stretch divide-x">
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <TaskManager />
          <MainContent />
          <Gpt />
        </AppProvider>
      </QueryClientProvider>
    </main>
  );
}
