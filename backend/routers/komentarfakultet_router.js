const express = require("express");
const router = express.Router();

const FakultKomentarControl = require("./../controlers/komentarfakultet_controler");

router
  .route("/")
  .get(FakultKomentarControl.getCommentsByCollege)
  .post(FakultKomentarControl.insertCommentCollege);
router
  .route('/update/:UserID')
  .post(FakultKomentarControl.updateCommentCollege);
router
  .route('/ocjena/')
  .get(FakultKomentarControl.getGradeByCollege);
router
  .route('/brojKomentara/')
  .get(FakultKomentarControl.getNumberOfComments);
router
  .route("/:UserID")
  .get(FakultKomentarControl.getCommentByUserID);
module.exports = router;

//Ubaci u index.js
//Imas onih slozenih dje treba funkcija next pa sam samo ova dva ostavio
