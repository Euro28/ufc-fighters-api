// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../db/models/index.js";
import Sequelize from "sequelize";

const { Op } = Sequelize;
db.sequelize.sync();
const Fight = db.fights;

const test = async () => {
  const cannonier = await Fight.findAll({
    where: {
      [Op.or]: [
        {
          red_fighter: {
            [Op.iLike]: "%jared cannonier",
          },
        },
        {
          blue_fighter: {
            [Op.iLike]: "%jared cannonier",
          },
        },
      ],
    },
  });
  console.log(JSON.stringify(cannonier, null, 2));
};

test();

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
