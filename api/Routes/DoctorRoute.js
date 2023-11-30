const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Doctor = require("../Models/DoctorSchema");
const {
  register,
  getDocData,
  bookDoctor,
  getBooking,
  getDocDataWithEm,
} = require("../Controllers/DoctorController");

router.post("/register", register);
router.get("/doctorDataByEm/:id", getDocDataWithEm);
router.get("/doctorData", getDocData);
router.post("/bookDoctor", bookDoctor);
router.post("/getBooking", getBooking);

module.exports = router;
