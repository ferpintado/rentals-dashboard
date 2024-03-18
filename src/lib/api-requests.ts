export const getTasks = async () =>
  fetch("/api/tasks").then((res) => res.json());

export const getReportsByBuildingId = async (buildingId: number) =>
  fetch(`/api/reports/${buildingId}`).then((res) => res.json());
