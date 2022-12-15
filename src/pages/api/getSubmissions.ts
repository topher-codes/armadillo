import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const submissions = await prisma.submissions.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      details: true,
      issue: true,
      status: true,
      createdAt: true,
    },
  });

  try {
    res.status(200).json(submissions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
