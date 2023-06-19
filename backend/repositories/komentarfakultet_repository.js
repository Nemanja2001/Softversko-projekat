const pool = require("./../dbconnection/dbconn");

const getCommentByUserID = async (UserID) => {
  const results = await pool.query(
    'SELECT * FROM public."KomentarFakultet" where "IDKorisnika" = $1',
    [UserID]
  );
  return results.rows;
};
const getCommentsByCollege = async (info) => {
  const results = await pool.query(
    'SELECT * FROM public."KomentarFakultet" where "IDUniverziteta" = $1 and "ImeFakulteta"=$2',
    [info.UniversityID, info.CollegeName]
  );
  return results.rows;
};
const getGradeByCollege = async (info) => {
  const results = await pool.query(
    'SELECT avg("Ocjena") as projsecnaOcjena FROM public."KomentarFakultet" where "IDUniverziteta" = $1 and "ImeFakulteta"=$2',
    [info.UniversityID, info.CollegeName]
  );
  return results.rows;
};
const getNumberOfComments = async (info) => {
  const results = await pool.query(
    'SELECT count(*) as ukupnoKomentara FROM public."KomentarFakultet" where "IDUniverziteta" = $1 and "ImeFakulteta"=$2',
    [info.UniversityID, info.CollegeName]
  );
  return results.rows;
};
const insertCommentCollege = async (info) => {
  const results = await pool.query(
    'Insert into public."KomentarFakultet" ("IDUniverziteta", "ImeFakulteta", "IDKorisnika", "Tekst", "Ocjena") Values ($1,$2,$3,$4,$5)',
    [info.UniversityID, info.CollegeName, info.UserID, info.Text, info.Ocjena]
  );
  return results.rows;
};
const updateCommentCollege = async (info) => {
  const resluts = await pool.query(
    'Update public."KomentarFakultet" set "Tekst"=$1, "Ocjena"=$2 where "IDUniverziteta"=$3 and "ImeFakulteta"=$4 and "IDKorisnika"=$5',
    [info.Text, info.Ocjena, info.UniversityID, info.CollegeName, info.UserID]
  );
  return resluts.rows;
};

module.exports = {
  getCommentByUserID,
  getCommentsByCollege,
  getGradeByCollege,
  getNumberOfComments,
  insertCommentCollege,
  updateCommentCollege,
};
