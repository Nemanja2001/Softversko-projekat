const express = require("express")
const router = express.Router()

const drzavacontroler = require("./../controlers/drzava_controler")
router.route('/')
    .get(drzavacontroler.getAllCountries)
    .post(drzavacontroler.insertCountry)
router.route('/:countryName')
    .get(drzavacontroler.getCountryByName)
    .post(drzavacontroler.updateCountry)

module.exports=router;