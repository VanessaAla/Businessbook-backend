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
          businessAddress: "Diepenbrocklaan 129",
          imgURL:
            "https://i.pinimg.com/564x/74/20/ac/7420ac008dcd2b7b062a4ba9702d9d49.jpg",
        },
        {
          businessName: "GardenFolio",
          businessCategory: "gardening",
          businessCity: "Amsterdam",
          businessPostalCode: "1096 BL",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
          businessAddress: "Admiraal de Ruijterweg 137",
          imgURL:
            "https://i.pinimg.com/564x/18/96/cd/1896cd7946755693a8bbfc2e2b2d66dc.jpg",
        },
        {
          businessName: "Brity",
          businessCategory: "cleaning",
          businessCity: "Rotterdam",
          businessPostalCode: "3064 LP",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user3.id,
          businessAddress: "Molenwerf 141",
          imgURL:
            "https://i.pinimg.com/564x/d7/9d/36/d79d36ac6b4bdfa82dbad7174d51cd3a.jpg",
        },
        {
          businessName: "Cookith",
          businessCategory: "catering",
          businessCity: "Eindhoven",
          businessPostalCode: "5644 TV",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user4.id,
          businessAddress: "Jan van Eyckgracht 187",
          imgURL:
            "https://i.pinimg.com/564x/7a/6e/47/7a6e4797d8fcbf58cde7b3a40a8ce322.jpg",
        },
        {
          businessName: "pawxy",
          businessCategory: "pet sitters",
          businessCity: "Arnhem",
          businessPostalCode: "6843 NC",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user5.id,
          businessAddress: "Schelmseweg 162",
          imgURL:
            "https://i.pinimg.com/564x/fd/f5/2f/fdf52f8f929c01f63fc389d50d653b85.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("businesses", null, {});
  },
};
