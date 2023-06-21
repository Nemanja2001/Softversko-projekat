const express = require("express");
const router = express.Router();

const fakultetcontroler = require("./../controlers/fakultet_controler");
router
  .route("/")
  .get(fakultetcontroler.getAllColleges)
  .post(fakultetcontroler.insertCollege);
router.route("/:name")
  .get(fakultetcontroler.getCollegeByName);
router.route("/university/:UniversityID")
  .get(fakultetcontroler.getCollegeByUniversityID)

module.exports = router;
