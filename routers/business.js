const { Router } = require("express");
const auth = require("../auth/middleware");
const Business = require("../models").business;

const router = new Router();

router.get("/", async (req, res, next) => {
  const businesses = await Business.findAll({});

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

router.delete("/:id", auth, async (req, res) => {
  console.log("id: ", req.params.id);

  const isAdmin = true;
  const businessId = req.params.id;

  const user = await User.findOne({ where: { isAdmin } }); // check your logic here for more admins

  if (user.id !== req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this space" });
  }

  const business = await Business.destroy({
    where: {
      id: businessId,
    },
  });

  res.status(200).send({ message: "ok", business });
});

module.exports = router;
