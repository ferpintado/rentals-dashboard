import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        done: false,
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        building: true,
      },
    });

    return new Response(JSON.stringify(tasks), {
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
