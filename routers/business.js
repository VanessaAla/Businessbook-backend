const { Router } = require("express");
const auth = require("../auth/middleware");
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

router.post("/register", auth, async (req, res) => {
  const businessName = req.body.businessName;
  const businessCategory = req.body.businessCategory;
  const businessCity = req.body.businessCity;
  const businessPostalCode = req.body.businessPostalCode;
  const businessAddress = req.body.businessAddress;
  const imgURL = req.body.imgURL;
  const registerBusiness = await Business.create({
    businessName,
    businessCategory,
    businessCity,
    businessPostalCode,
    businessAddress,
    imgURL,
    userId: req.user.id,
  });
  return res
    .status(201)
    .send({ message: "Business registered", registerBusiness });
});

module.exports = router;
