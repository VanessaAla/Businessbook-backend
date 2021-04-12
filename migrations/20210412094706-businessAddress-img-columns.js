"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("businesses", "businessAddress", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("businesses", "imgURL", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("businesses", "businessAddress");
    await queryInterface.removeColumn("businesses", "imgURL");
  },
};
