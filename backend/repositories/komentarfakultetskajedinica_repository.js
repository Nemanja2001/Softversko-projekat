const pool = require("../dbconnection/dbconn");

const getAllFacultyUnitCommentar = async (info) => {
  const resluts = await pool.query(
    'SELECT * FROM public."FakultetskaJedinciaKomentar" where "IDUniverziteta"=$1 and "ImeFakulteta"=$2 and "ImeFakultetskeJedinice"=$3',
    [info.UniversityID, info.NameFaculty, info.NameFacultyUnit]
  );
  return resluts.rows;
};

const getUnityCommentByUserID = async (UserID) => {
  const resluts = await pool.query(
    'SELECT * FROM public."FakultetskaJedinciaKomentar" where "IDKorisnika" = $1',
    [UserID]
  );
  return resluts.rows;
};
const getGradeByCollegeUnit = async (info) => {
  const resluts = await pool.query(
    'SELECT avg("Ocjene") FROM public."FakultetskaJedinciaKomentar" where "IDUniverziteta" = $1 and "ImeFakulteta"=$2 and "ImeFakultetskeJedinice"=$3',
    [info.UniveristyID, info.CollegeName, info.nameFacUnity]
  );
  return resluts.rows;
};

const insertCommentCollegeUnity = async (info) => {
  const results = await pool.query(
    'Insert into public."FakultetskaJedinciaKomentar" ("IDKorisnika", "IDUniverziteta", "ImeFakulteta", "ImeFakultetskeJedinice", "Tekst", "Ocjene") Values ($1,$2,$3,$4,$5,$6)',
    [
      info.UserID,
      info.UniversityID,
      info.NameFaculty,
      info. NameFacultyUnit,
      info.Text,
      info.Ocjena,
    ]
  );
  return results.rows;
};

const updateCommentCollegeUnity = async (info) => {
  const resluts = await pool.query(
    'Update public."FakultetskaJedinciaKomentar" set "Tekst"=$1, "Ocjene"=$2 where "IDUniverziteta"=$3 and "ImeFakulteta"=$4 and "IDKorisnika"=$5 and "ImeFakultetskeJedinice"=$6',
    [
      info.Text,
      info.Ocjena,
      info.UniversityID,
      info.NameFaculty,
      info.UserID,
      info.NameFacultyUnit,
    ]
  );
  return resluts.rows;
};
const getNumberOfFacultyUnitComments = async (info) => {
  const resluts = await pool.query(
    'SELECT count(*) as unupnoKomentara FROM public."FakultetskaJedinciaKomentar" where "IDUniverziteta" = $1 and "ImeFakulteta"=$2 and "ImeFakultetskeJedinice"=$3',
    [info.UniveristyID, info.CollegeName, info.nameFacUnity]
  );
  return resluts.rows;
};

module.exports = {
  getAllFacultyUnitCommentar,
  getUnityCommentByUserID,
  getGradeByCollegeUnit,
  insertCommentCollegeUnity,
  updateCommentCollegeUnity,
  getNumberOfFacultyUnitComments,
};
