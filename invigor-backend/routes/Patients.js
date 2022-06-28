const express = require("express");
const router = express.Router();

const { Patient } = require("../models");

router.get("/", async (req, res) => {
    const patientsList = await Patient.findAll()
    res.json(patientsList);
});

router.post("/", async (req, res) => {
  const patientRegDetails = req.body;
  await Patient.create(patientRegDetails);
  res.json(patientRegDetails);
});

module.exports = router;
