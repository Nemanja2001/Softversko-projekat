const express = require("express");
const router = express.Router();

const KomentFakJedinicaControler = require("./../controlers/komentarfakultetskajedinica_controler");
router
  .route("/")
  .get(KomentFakJedinicaControler.getAllFacultyUnitCommentar)
  .post(KomentFakJedinicaControler.insertCommentCollegeUnity);
// router
//   .route("/:NoOfComment")
//   .get(KomentFakJedinicaRouter.getNumberOfFacultyUnitComments);
// funkcija next treba da se implementira u repository komentarfakutetskajedinica

//UPISI OVU RUTU U INDEX.JS!!!!

router
  .route("/:UserID")
  .get(KomentFakJedinicaControler.getUnityCommentByUserID)
  .post(KomentFakJedinicaControler.updateCommentCollegeUnity);

module.exports = router;
