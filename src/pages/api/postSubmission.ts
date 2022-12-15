import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, details, issue } = req.body;

  const submission = await prisma.submissions.create({
    data: {
      name,
      email,
      details,
      issue,
      status: "new",
    },
  });

  try {
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
