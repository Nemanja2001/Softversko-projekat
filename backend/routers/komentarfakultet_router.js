const express = require("express");
const router = express.Router();

const FakultKomentarControl = require("./../controlers/komentarfakultet_controler");

router
  .route("/")
  .post(FakultKomentarControl.insertCommentCollege)

  .route("/:UserID")
  .get(FakultKomentarControl.getCommentByUserID);

module.exports = router;

//Ubaci u index.js
//Imas onih slozenih dje treba funkcija next pa sam samo ova dva ostavio
