"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "madler@live.com" },
    });

    const user2 = await User.findOne({
      where: { email: "catalog@me.nl" },
    });
    const user3 = await User.findOne({
      where: { email: "dwsauder@icloud.com" },
    });
    const user4 = await User.findOne({
      where: { email: "di@att.nl" },
    });
    const user5 = await User.findOne({
      where: { email: "uqmcolyv@att.net" },
    });

    await queryInterface.bulkInsert(
      "businesses",
      [
        {
          businessName: "Sanage",
          businessCategory: "spa",
          businessCity: "Utrecht",
          businessPostalCode: "3931 XE",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          businessName: "GardenFolio",
          businessCategory: "gardening",
          businessCity: "Amsterdam",
          businessPostalCode: "1096 BL",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
        {
          businessName: "Brity",
          businessCategory: "cleaning",
          businessCity: "Rotterdam",
          businessPostalCode: "3064 LP",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user3.id,
        },
        {
          businessName: "Cookith",
          businessCategory: "catering",
          businessCity: "Eindhoven",
          businessPostalCode: "5644 TV",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user4.id,
        },
        {
          businessName: "pawxy",
          businessCategory: "pet sitters",
          businessCity: "Arnhem",
          businessPostalCode: "6843 NC",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user5.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("businesses", null, {});
  },
};
