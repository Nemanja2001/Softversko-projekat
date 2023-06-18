const pool = require("../dbconnection/dbconn");

const getAllFacultyUnitCommentar = async (info) => {
  const resluts = await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDUniverzitet=$1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [info.universityId, info.nameFac, info.nameFacUnity]
  );
  return resluts.rows;
};

const getUnityCommentByUserID = async (UserID) => {
  const resluts = await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDKorisnika = $1',
    [UserID]
  );
  return resluts.rows;
};
const getGradeByCollege = async (info) => {
  const resluts = await pool.query(
    'SELECT avg(Ocjena) FROM public."FakultetskaJedinicaKomentar" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [info.UniveristyID, info.CollegeName, info.nameFacUnity]
  );
  return resluts.rows;
};

const insertCommentCollegeUnity = async (info) => {
  const results = await pool.query(
    'Insert into public."FakultetskaJedinicaKomentar" (IDKorisnika,IDUniverziteta, ImeFakulteta,ImeFakultetskeJedinice, Tekst, Ocjena) Values ($1,$2,$3,$4,$5,$6)',
    [
      info.UserID,
      info.UniveristyID,
      info.CollegeName,
      info.nameFacUnity,
      info.comment,
      info.grade,
    ]
  );
  return results.rows;
};

const updateCommentCollegeUnity = async (info) => {
  const resluts = await pool.query(
    'Update into public."FakultetskaJedinicaKomentar" set Tekst=$1, Ocjena=$2 where IDUniverziteta=$3 and ImeFakulteta=$4 and IDKorisnika=$5 and ImeFakultetskeJedinice=$6',
    [
      info.comment,
      info.grade,
      info.UniveristyID,
      info.CollegeName,
      info.UserID,
      info.nameFacUnity,
    ]
  );
  return resluts.rows;
};
const getNumberOfFacultyUnitComments = async (info) => {
  const resluts = await pool.query(
    'SELECT count(*) as unupnoKomentara FROM public."FakultetskaJedinicaKomentar" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [info.UniveristyID, info.CollegeName, info.nameFacUnity]
  );
  return resluts.rows;
};

module.exports = {
  getAllFacultyUnitCommentar,
  getUnityCommentByUserID,
  getGradeByCollege,
  insertCommentCollegeUnity,
  updateCommentCollegeUnity,
  getNumberOfFacultyUnitComments,
};
