const express = require("express")
const router = express.Router()

const korisnicikontroler = require("./../controlers/korisnici_controler")
router.route('/')
    .get(korisnicikontroler.getAllUsers)
    .post(korisnicikontroler.insertNewUser)
router.route('/:userID')
    .post(korisnicikontroler.updateUserPass)
router.route('/:username')
    .get(korisnicikontroler.getUserByUsername)
router.route('/:email')
    .get(korisnicikontroler.getUserByEmail)
router.route('/:userID')
    .get(korisnicikontroler.getUserByID)
router.route('/:login')
    .get(korisnicikontroler.login)

module.exports=router;