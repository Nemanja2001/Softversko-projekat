const express = require("express")
const router = express.Router()

const korisnicikontroler = require("./../controlers/korisnici_controler")
router.route('/')
    .get(korisnicikontroler.getAllUsers)
    .post(korisnicikontroler.insertNewUser)   
router.route('/login/')
    .post(korisnicikontroler.login)
router.route('/user/:userID')
    .get(korisnicikontroler.getUserByID)
    .post(korisnicikontroler.updateUserPass)
router.route('/username/:username')
    .get(korisnicikontroler.getUserByUsername)
router.route('/email/:email')
    .get(korisnicikontroler.getUserByEmail)
module.exports=router;