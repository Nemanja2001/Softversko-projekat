const pool = require("../dbconnection/dbconn");

const getAllFacultyUnitCommentar = async (
  universityId,
  nameFac,
  nameFacUnity
) => {
  return await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDUniverzitet=$1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [universityId, nameFac, nameFacUnity],
    (error, results) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      return results.rows;
    }
  );
};

const getUnityCommentByUserID = async (UserID) => {
  return await pool.query(
    'SELECT Tekst FROM public."FakultetskaJedinicaKomentar" where IDKorisnika = $1',
    [UserID],
    (error, results) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      return results.rows;
    }
  );
};
const getGradeByCollege = async (UniveristyID, CollegeName, nameFacUnity) => {
  return await pool.query(
    'SELECT avg(Ocjena) FROM public."FakultetskaJedinicaKomentar" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [UniveristyID, CollegeName, nameFacUnity],
    (error, results) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      return results.rows;
    }
  );
};

const insertCommentCollegeUnity = async (
  UserID,
  UniveristyID,
  CollegeName,
  nameFacUnity,
  comment,
  grade
) => {
  return await pool.query(
    'Insert into public."FakultetskaJedinicaKomentar" (IDKorisnika,IDUniverziteta, ImeFakulteta,ImeFakultetskeJedinice, Tekst, Ocjena) Values ($1,$2,$3,$4,$5,$6)',
    [UserID, UniveristyID, CollegeName, nameFacUnity, comment, grade],
    (error, results) => {
      if (error) {
        console.log("Greška pri unosu komentara za univerzitetske jedinice");
      }

      return results.rows;
    }
  );
};

const updateCommentCollegeUnity = async (
  UniveristyID,
  CollegeName,
  UserID,
  comment,
  grade,
  nameFacUnity
) => {
  return await pool.query(
    'Update into public."FakultetskaJedinicaKomentar" set Tekst=$1, Ocjena=$2 where IDUniverziteta=$3 and ImeFakulteta=$4 and IDKorisnika=$5 and ImeFakultetskeJedinice=$6',
    [comment, grade, UniveristyID, CollegeName, UserID, nameFacUnity],
    (error, results) => {
      if (error) {
        console.log("Greška pri unosu univerziteta");
      }

      return results.rows;
    }
  );
};
const getNumberOfUnityComments = async (
  UniveristyID,
  CollegeName,
  nameFacUnity
) => {
  return await pool.query(
    'SELECT count(Tekst) FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2 and ImeFakultetskeJedinice=$3',
    [UniveristyID, CollegeName, nameFacUnity],
    (error, results) => {
      if (error) {
        console.error("Error executing query", error);
        return;
      }
      return results.rows;
    }
  );
};

module.exports = {
  getAllFacultyUnitCommentar,
  getUnityCommentByUserID,
  getGradeByCollege,
  insertCommentCollegeUnity,
  updateCommentCollegeUnity,
  getNumberOfUnityComments,
};
