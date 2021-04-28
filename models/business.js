"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      business.belongsTo(models.user);
      business.hasMany(models.appointments);
      business.hasMany(models.notifications);
    }
  }
  business.init(
    {
      businessName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessEmail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      businessCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imgURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "business",
    }
  );
  return business;
};
