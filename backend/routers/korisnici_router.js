const express = require("express")
const router = express.Router()

const korisnicikontroler = require("./../controlers/korisnici_controler")
router.route('/')
    .get(korisnicikontroler.getAllUsers)
    .post(korisnicikontroler.insertNewUser)
router.route('/:userID')
    .get(korisnicikontroler.getUserByID)
    .post(korisnicikontroler.updateUserPass)
router.route('/username/:username')
    .get(korisnicikontroler.getUserByUsername)
router.route('/email/:email')
    .get(korisnicikontroler.getUserByEmail)
router.route('/user/login/')
    .get(korisnicikontroler.login)

module.exports=router;