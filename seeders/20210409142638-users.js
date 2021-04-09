"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Nedyalka",
          lastName: "Iglesias",
          email: "madler@live.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          address: "Waterhoen 6",
          city: "Utrecht",
          postalCode: "3972 RA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Zachariah ",
          lastName: "Wetzel",
          email: "catalog@me.nl",
          password: bcrypt.hashSync("test4321", SALT_ROUNDS),
          address: "Kinderdijkstraat 98",
          city: "Amsterdam",
          postalCode: "1079 GH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ariane",
          lastName: "Kate",
          email: "dwsauder@icloud.com",
          password: bcrypt.hashSync("065624", SALT_ROUNDS),
          address: "Hazelaarweg 145",
          city: "Rotterdam",
          postalCode: "3053 PM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Fady",
          lastName: "Dietz",
          email: "di@att.nl",
          password: bcrypt.hashSync("b70835", SALT_ROUNDS),
          address: "Vasco da Gamalaan 156",
          city: "Eindhoven",
          postalCode: "5623 RH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Edison",
          lastName: "Berkum",
          email: "uqmcolyv@att.net",
          password: bcrypt.hashSync("4qfx", SALT_ROUNDS),
          address: "Heerlenstraat 158",
          city: "Arnhem",
          postalCode: "6845 AE",
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
