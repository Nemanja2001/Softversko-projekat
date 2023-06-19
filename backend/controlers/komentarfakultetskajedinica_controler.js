const pool = require("./../dbconnection/dbconn");
const comementfacultyUnitfunctions = require("./../repositories/komentarfakultetskajedinica_repository");

const getAllFacultyUnitCommentar = async (request, response) => {
  const results = await comementfacultyUnitfunctions.getAllFacultyUnitCommentar(
    request.body
  );
  response.send(results);
};

const getUnityCommentByUserID = async (request, response) => {
  const results = await comementfacultyUnitfunctions.getUnityCommentByUserID(
    request.body.UserID
  );
  response.send(results);
};

const getGradeByCollegeUnit = async (request, response) => {
  const results = await comementfacultyUnitfunctions.getGradeByCollegeUnit(
    request.body
  );
  response.send(results);
};

const insertCommentCollegeUnity = async (request, response) => {
  const results = await comementfacultyUnitfunctions.insertCommentCollegeUnity(
    request.body
  );
  response.send(results);
};

const updateCommentCollegeUnity = async (request, response) => {
  const results = await comementfacultyUnitfunctions.updateCommentCollegeUnity(
    request.body
  );
  response.send(results);
};

const getNumberOfFacultyUnitComments = async (request, response) => {
  const results =
    await comementfacultyUnitfunctions.getNumberOfFacultyUnitComments(
      request.body
    );
  response.send(results);
};

module.exports = {
  getAllFacultyUnitCommentar,
  getUnityCommentByUserID,
  getGradeByCollegeUnit,
  insertCommentCollegeUnity,
  updateCommentCollegeUnity,
  getNumberOfFacultyUnitComments,
};
