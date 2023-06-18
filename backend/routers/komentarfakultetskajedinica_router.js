const express = require("express");
const router = express.Router();

const KomentFakJedinicaRouter = require("./../controlers/komentarfakultetskajedinica_controler");
router
  .route("/")
  .get(KomentFakJedinicaRouter.getAllFacultyUnitCommentar)
  .post(KomentFakJedinicaRouter.insertCommentCollegeUnity);
// router
//   .route("/:NoOfComment")
//   .get(KomentFakJedinicaRouter.getNumberOfFacultyUnitComments);
// funkcija next treba da se implementira u repository komentarfakutetskajedinica

//UPISI OVU RUTU U INDEX.JS!!!!

router
  .route("/:UserID")
  .get(KomentFakJedinicaRouter.getUnityCommentByUserID)
  .post(KomentFakJedinicaRouter.updateCommentCollegeUnity);

module.exports = router;
