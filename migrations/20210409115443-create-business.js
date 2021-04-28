"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      businessEmail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      businessCategory: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      businessCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      businessPostalCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("businesses");
  },
};
