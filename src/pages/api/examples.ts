import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid id" });
  }

  const examples = await prisma.account.findFirst({
    where: {
      id,
    },
  });
  res.status(200).json(examples);
};

export default examples;
