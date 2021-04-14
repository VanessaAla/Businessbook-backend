const { Router } = require("express");
const auth = require("../auth/middleware");
const Appointment = require("../models").appointments;
const Business = require("../models").business;
const User = require("../models").user;

const router = new Router();

router.post("/:id/appointment", auth, async (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res.status(400).send({ message: "An appointment must have a date" });
  }

  const Appointment = await Appointment.create({
    date,
    businessId: req.params.id,
    userId: req.user.id,
  });

  return res.status(201).send({ message: "Appointment made", appointment });
});

module.exports = router;
