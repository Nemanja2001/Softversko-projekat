
const express = require("express")
const router = express.Router()

const univerzitetrouter = require("./../controlers/univerzitet_controler")
const facultyrouter = require("./../controlers/fakultet_controler")
const facultyunitcontroler = require("./../controlers/fakultetskajedinica_controler")
router.route('/')
    .get(univerzitetrouter.getAllUniversities)
    .post(univerzitetrouter.insertUniveristy)
router.route('/:uniID')
    .get(univerzitetrouter.getUniversityByID)
router.route('/:uniName')
    .get(univerzitetrouter.getUniversityByName)
router.route('/:UniversityID/coleages')
    .get(facultyrouter.getCollegeByUniversityID)
router.route('/:UniversityID/facultyunits')
    .get(facultyunitcontroler.getFacultyUnitsByUniversity)

module.exports = router