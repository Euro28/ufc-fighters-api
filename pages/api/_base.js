import { PrismaClient } from "@prisma/client";
import sherdog from "sherdog";
import googleIt from "google-it";
import pick from "lodash/pick";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

const fightInfo = async (fighterName, callback) => {
  //google the fighter name
  const queryUrls = await googleIt({
    "only-urls": true,
    query: fighterName + " sherdog",
  });

  let sherdogUrl = null;

  //if that name has a fighter profile on sherdog
  for (const link of queryUrls) {
    if (link.link.includes("sherdog.com/fighter/")) {
      sherdogUrl = link.link;
      break;
    }
  }

  //get their sherdog information and return it
  if (sherdogUrl) {
    sherdog.getFighter(sherdogUrl, (data) => {
      callback(
        pick(data, [
          "name",
          "nickname",
          "association",
          "age",
          "birthday",
          "hometown",
          "nationality",
          "height",
          "weight",
          "weight_class",
          "wins",
          "losses",
        ])
      );
    });
  } else callback({});
};

export { prisma, fightInfo };
