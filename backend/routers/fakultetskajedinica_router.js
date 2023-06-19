const express = require("express");
const router = express.Router();

const FakulJedinicaControler = require("./../controlers/fakultetskajedinica_controler");

router
  .route("/")
  .get(FakulJedinicaControler.getFacultyUnitsByFaculty)
  .post(FakulJedinicaControler.insertFacultyUnit)

module.exports = router;
