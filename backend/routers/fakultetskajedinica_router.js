const express = require("express");
const router = express.Router();

const FakulJedinicaControler = require("./../controlers/fakultetskajedinica_controler");

router
  .route("/")
  .get(FakulJedinicaControler.getFacultyUnitsByFaculty)
  .post(FakulJedinicaControler.insertFacultyUnit)

  .route("/:UniversityID")
  .get(FakulJedinicaControler.getFacultyUnitsByUniversity); //Ovo si rekao da ces izmijenit jer je visak

module.exports = router;

//Samo ubaci u index.js nisam tamo dirao
