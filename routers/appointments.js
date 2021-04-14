const { Router } = require("express");
const auth = require("../auth/middleware");
const Appointment = require("../models").appointments;
const Business = require("../models").business;
const User = require("../models").user;
const { Op } = require("sequelize");

const router = new Router();

router.post("/:id/appointment", auth, async (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res.status(400).send({ message: "An appointment must have a date" });
  }

  const appointment = await Appointment.create({
    date,
    businessId: req.params.id,
    userId: req.user.id,
    status: "requested",
  });

  const fetchedAppointment = await Appointment.findOne({
    include: [Business],
    where: { id: appointment.id },
  });

  return res
    .status(201)
    .send({ message: "Appointment made", fetchedAppointment });
});

router.get("/", auth, async (req, res) => {
  console.log("date: ", req.query.date);

  const appointmentList = await Appointment.findAndCountAll({
    include: [Business],
    order: [["date", "ASC"]],
    where: {
      userId: req.user.id,
      date: {
        [Op.gte]: req.query.date,
      },
    },
  });

  console.log(appointmentList);
  res.status(200).send({ message: "ok", appointmentList });
});

module.exports = router;
