const { Router } = require("express");
const Business = require("../models").business;

const router = new Router();

router.get("/", async (req, res, next) => {
  const businessCategory = req.query.category;
  const businessCity = req.query.city;

  const businesses = await Business.findAll({
    where: { businessCategory, businessCity },
  });

  res.status(200).send({ message: "ok", businesses });
});

module.exports = router;
