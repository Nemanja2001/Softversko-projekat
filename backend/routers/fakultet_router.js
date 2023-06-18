const express = require("express")
const router = express.Router()

const fakultetcontroler = require("./../controlers/fakultet_controler")
router.route('/')
    .get(fakultetcontroler.getAllColleges)
    .post(fakultetcontroler.insertCollege)
router.route('/:UniversityId')
    .get(fakultetcontroler.getCollegeByUniversityID)
router.route('/:name')
    .get(fakultetcontroler.getCollegeByName)

module.exports=router;