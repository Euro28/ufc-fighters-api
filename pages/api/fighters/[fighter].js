// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../../db/models/index.js";
import Sequelize from "sequelize";
import mma from "../../../mma-api/lib/mma/index.js";

export default async function handler(req, res) {
  let { fighter } = req.query;
  const { Op } = Sequelize;
  const Fight = db.fights;

  db.sequelize.sync();

  const fights = await Fight.findAll({
    where: {
      [Op.or]: [
        {
          red_fighter: {
            [Op.iLike]: `%${fighter}`,
          },
        },
        {
          blue_fighter: {
            [Op.iLike]: `%${fighter}`,
          },
        },
      ],
    },
  });

  mma.fighter(fighter, (data) => {
    data.fights = fights;
    res.status(200).json(data);
  });
}