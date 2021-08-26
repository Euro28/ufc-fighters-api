const fightModel = (sequelize, DataTypes) => {
  const Fight = sequelize.define("fight", {
    red_fighter: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    blue_fighter: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    red_odds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blue_odds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fight_day: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fight_location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    winner: {
      type: DataTypes.STRING(4),
      allowNUll: false,
    },
    title_bout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    weight_class: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }, 
    no_of_rounds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    red_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blue_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    better_rank: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    finish: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  });

  return Fight;
};

export default fightModel;
