const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.get("/", auth, async (req, res) => {
  const isAdmin = true;
  //check here the logic for more admin users req.user.isAdmin
  const user = await User.findOne({ where: { isAdmin } });

  if (user.id !== req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this space" });
  }

  const allUsers = await User.findAndCountAll({});

  allUsers.rows.forEach((user) => {
    delete user.dataValues["password"];
  });

  console.log("allUsers: ", allUsers);
  res.status(200).send({ message: "ok", allUsers });
});

router.put("/block", async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    console.log(user);
    if (!user) {
      res.status(404).send("user not found");
    } else {
      await user.update({ isBlocked: true });
      res.status(200).send({ message: "user blocked!", user });
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/unblock", async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    console.log(user);
    if (!user) {
      res.status(404).send("user not found");
    } else {
      await user.update({ isBlocked: false });
      res.status(200).send({ message: "user unblocked!", user });
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/update", auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const postalCode = req.body.postalCode;

    console.log("body: ", req.body);

    if (!user) {
      res.status(404).send("user not found");
    } else {
      if (firstName !== "") {
        await user.update({ firstName });
      }
      if (lastName !== "") {
        await user.update({ lastName });
      }
      if (email !== "") {
        await user.update({ email });
      }
      if (address !== "") {
        await user.update({ address });
      }
      if (city !== "") {
        await user.update({ city });
      }
      if (postalCode !== "") {
        await user.update({ postalCode });
      }
      res.status(200).send({ message: "user details updated!", user });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
