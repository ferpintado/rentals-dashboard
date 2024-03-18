import { PrismaClient, Prisma } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

async function main() {
  const buildings = [
    {
      name: "Vancouver Tower",
      address: "123 Main St, Vancouver, BC, Canada",
      apartments: [
        {
          unit: 101,
          type: "Studio",
          priceReport: [
            {
              price: 1500,
              psf: 1,
              date: dayjs().toDate(),
            },
          ],
        },
        {
          unit: 102,
          type: "1BR",
          priceReport: [
            {
              price: 1800,
              psf: 3,
              date: dayjs().subtract(1, "month").toDate(),
            },
          ],
        },
        {
          unit: 202,
          type: "2BR",
          priceReport: [
            {
              price: 2150,
              psf: 2,
              date: dayjs().subtract(2, "month").toDate(),
            },
          ],
        },
        {
          unit: 104,
          type: "1BR",
          priceReport: [
            {
              price: 1000,
              psf: 2,
              date: dayjs().subtract(3, "month").toDate(),
            },
          ],
        },
        {
          unit: 109,
          type: "1BR",
          priceReport: [
            {
              price: 1700,
              psf: 4,
              date: dayjs().subtract(5, "month").toDate(),
            },
          ],
        },
      ],
      tasks: [{ type: "PRICING", done: false }],
    },
    {
      name: "Ocean Apartments",
      address: "456 Ocean Ave, Vancouver, BC, Canada",
      apartments: [
        {
          unit: 201,
          type: "2BR",
          priceReport: [
            {
              price: 2200,
              psf: 2,
              date: dayjs().toDate(),
            },
          ],
        },
        {
          unit: 202,
          type: "3BR",
          priceReport: [
            {
              price: 2800,
              psf: 1,
              date: dayjs().subtract(5, "month").toDate(),
            },
          ],
        },
        {
          unit: 502,
          type: "2BR",
          priceReport: [
            {
              price: 2500,
              psf: 2,
              date: dayjs().subtract(3, "month").toDate(),
            },
          ],
        },
      ],
      tasks: [{ type: "PRICING", done: false }],
    },
  ];

  for (const building of buildings) {
    await prisma.building.create({
      data: {
        name: building.name,
        address: building.address,
        apartments: {
          create: building.apartments.map((apartment) => ({
            unit: apartment.unit,
            type: apartment.type,
            PriceReport: { create: apartment.priceReport },
          })),
        },
        tasks: {
          create: building.tasks,
        },
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
