const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        //aqui debe ir una constrain
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
