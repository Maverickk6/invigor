const express = require("express");
const router = express.Router();

const { Practices } = require("../models");

router.get("/", async (req, res) => {
    const practiceList = await Practices.findAll()
    res.json(practiceList);
});

router.post("/", async (req, res) => {
  const practiceRegDetails = req.body;
  await Practices.create(practiceRegDetails);
  res.json(practiceRegDetails);
});

module.exports = router;
