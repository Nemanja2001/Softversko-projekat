const express = require("express");
const router = express.Router();

const KomentFakJedinicaControler = require("./../controlers/komentarfakultetskajedinica_controler");
router
  .route("/")
  .get(KomentFakJedinicaControler.getAllFacultyUnitCommentar)
  .post(KomentFakJedinicaControler.insertCommentCollegeUnity);
router
  .route('/update/:UserID')
  .post(KomentFakJedinicaControler.updateCommentCollegeUnity);
router
  .route('/ocjena/')
  .get(KomentFakJedinicaControler.getGradeByCollegeUnit);
router
  .route('/brojKomentara/')
  .get(KomentFakJedinicaControler.getNumberOfFacultyUnitComments);
router
  .route("/:UserID")
  .get(KomentFakJedinicaControler.getUnityCommentByUserID)
  .post(KomentFakJedinicaControler.updateCommentCollegeUnity);

module.exports = router;
