"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Baddy",
          lastName: "Cherry",
          email: "blo@ck.com",
          password: bcrypt.hashSync("block", SALT_ROUNDS),
          address: "Heideveen 132",
          city: "Breda",
          postalCode: "4823 HL",
          isBlocked: true,
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
