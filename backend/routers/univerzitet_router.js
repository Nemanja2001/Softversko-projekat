const pool = require("./../controlers/univerzitet_controler")
const express = require("express")
const router = express.Router()

const univerzitetrouter = require("./../controlers/univerzitet_controler")
router.route('/')
    .get(univerzitetrouter.getAllUniversities)
    .post(univerzitetrouter.insertUniveristy)
router.route('/:uniID')
    .get(univerzitetrouter.getUniversityByID)
router.route('/:uniName')
    .get(univerzitetrouter.getUniversityByName)

module.exports = router