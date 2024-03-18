import { Apartment, Building, PriceReport, Task } from "@prisma/client";

export type TaskBuilding = Task & {
  building: Building;
};

export type PriceReportApartment = PriceReport & {
  apartment: Apartment;
};
