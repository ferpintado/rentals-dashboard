import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Params = {
  params: {
    buildingId: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  try {
    const { buildingId } = params;

    const reports = await prisma.priceReport.findMany({
      where: {
        apartment: {
          buildingId: parseInt(buildingId),
        },
      },
      include: {
        apartment: true,
      },
      orderBy: {
        date: "asc",
      },
    });

    return new Response(JSON.stringify(reports), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(null, {
      status: 500,
    });
  }
}
