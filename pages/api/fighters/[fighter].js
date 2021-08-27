// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../_base.js";

export default async function handler(req, res) {
  let { fighter } = req.query;
  const fights = await prisma.fights.findMany({
    where: {
      OR: [
        {
          redFighter: {
            equals: fighter,
            mode: "insensitive",
          },
        },
        {
          redFighter: {
            equals: fighter,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  res.status(200).json(fights);
}
