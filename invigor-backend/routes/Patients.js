const express = require("express");
const router = express.Router();

const { Patients } = require("../models");

router.get("/", async (req, res) => {
  const patientsList = await Patients.findAll();
  res.json(patientsList);
});

router.get("/:PracticeId", async (req, res) => {
  const id = req.params.PracticeId;
  const patient = await Patients.findAll({ where: { PracticeId: PracticeId } });
  res.json(patient);
});

router.post("/", async (req, res) => {
  const patientRegDetails = req.body;
  await Patients.create(patientRegDetails);
  res.json(patientRegDetails);
});

module.exports = router;
