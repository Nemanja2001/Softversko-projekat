const pool = require("../dbconnection/dbconn");

const getAllFacultyUnitCommentar = async (
  universityId,
  nameFac,
  nameFacUnity
) => {
  const resluts = await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDUniverzitet=$1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [universityId, nameFac, nameFacUnity]);
    return resluts.rows
};

const getUnityCommentByUserID = async (UserID) => {
  const resluts = await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDKorisnika = $1',
    [UserID]);
    return resluts.rows
};
const getGradeByCollege = async (UniveristyID, CollegeName, nameFacUnity) => {
  const resluts = await pool.query(
    'SELECT avg(Ocjena) FROM public."FakultetskaJedinicaKomentar" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [UniveristyID, CollegeName, nameFacUnity]);
    return resluts.rows
};

const insertCommentCollegeUnity = async (
  UserID,
  UniveristyID,
  CollegeName,
  nameFacUnity,
  comment,
  grade
) => {
  const results = await pool.query(
    'Insert into public."FakultetskaJedinicaKomentar" (IDKorisnika,IDUniverziteta, ImeFakulteta,ImeFakultetskeJedinice, Tekst, Ocjena) Values ($1,$2,$3,$4,$5,$6)',
    [UserID, UniveristyID, CollegeName, nameFacUnity, comment, grade]);
    return results.rows
};

const updateCommentCollegeUnity = async (
  UniveristyID,
  CollegeName,
  UserID,
  comment,
  grade,
  nameFacUnity
) => {
    const resluts = await pool.query(
    'Update into public."FakultetskaJedinicaKomentar" set Tekst=$1, Ocjena=$2 where IDUniverziteta=$3 and ImeFakulteta=$4 and IDKorisnika=$5 and ImeFakultetskeJedinice=$6',
    [comment, grade, UniveristyID, CollegeName, UserID, nameFacUnity]);
    return resluts.rows
};
const getNumberOfFacultyUnitComments = async (
  UniveristyID,
  CollegeName,
  nameFacUnity
) => {
    const resluts = await pool.query(
    'SELECT count(*) as unupnoKomentara FROM public."FakultetskaJedinicaKomentar" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [UniveristyID, CollegeName, nameFacUnity]);
    return resluts.rows
};

module.exports = {
  getAllFacultyUnitCommentar,
  getUnityCommentByUserID,
  getGradeByCollege,
  insertCommentCollegeUnity,
  updateCommentCollegeUnity,
  getNumberOfFacultyUnitComments,
};
