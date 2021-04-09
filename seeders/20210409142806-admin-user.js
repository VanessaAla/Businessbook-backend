"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Owner",
          lastName: "Mombarg",
          email: "ad@min.com",
          password: bcrypt.hashSync("admin", SALT_ROUNDS),
          address: "Waterhoen 6",
          city: "Leusden",
          postalCode: "3831 RG",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
