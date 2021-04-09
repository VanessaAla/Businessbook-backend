"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      notifications.belongsTo(models.user);
      notifications.belongsTo(models.business);
    }
  }
  notifications.init(
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "notifications",
    }
  );
  return notifications;
};
