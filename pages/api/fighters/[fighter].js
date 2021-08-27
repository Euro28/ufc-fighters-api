// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../_base.js"
import Cors from "cors"


export default async function handler(req, res) {
  let { fighter } = req.query;
  const fights = await prisma.fights.findMany();
  res.status(200).json(fights);
}
