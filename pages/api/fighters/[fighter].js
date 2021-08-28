// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma, fightInfo } from "../_base.js";

export default async function handler(req, res) {
  let { fighter } = req.query;

  fightInfo(fighter, async (data) => {
    if (!data.name) {
      res.status(400).json({ message: "invalid request" });
    } else {
      const fights = await prisma.fights.findMany({
        where: {
          OR: [
            {
              redFighter: {
                equals: data.name,
                mode: "insensitive",
              },
            },
            {
              redFighter: {
                equals: data.name,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      data.fights = fights;
      res.status(200).json(data);
    }
  });
}
