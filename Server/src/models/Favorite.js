const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: { type: DataTypes.INTEGER, autoincrement: true, primaryKey: true },
      name: { type: DataTypes.STRING },
      status: { type: DataTypes.ENUM("Alive","Dead"),  },
      species: { type: DataTypes.STRING },
      gender: { type: DataTypes.ENUM("Male","Female", "Genderles", "Unknown") },
      origin: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};
