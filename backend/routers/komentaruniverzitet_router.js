const express = require("express")
const router = express.Router()

const komentarUniverzitetKontroler = require("./../controlers/komentaruniverzitet_controler")
router.route('/')
    .post(komentarUniverzitetKontroler.insertComment)
router.route('/update/')
    .post(komentarUniverzitetKontroler.updateComment)
router.route('/:userID')
    .get(komentarUniverzitetKontroler.getCommentByUser)
router.route('/:UniversityID')
    .get(komentarUniverzitetKontroler.getCommentByUniversity)
router.route('/ocjena/:UniversityID')
    .get(komentarUniverzitetKontroler.getOcjena)
router.route('/brojKomentara/:UniversityID')
    .get(komentarUniverzitetKontroler.getNumOfComments)


module.exports=router;