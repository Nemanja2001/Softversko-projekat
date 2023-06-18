const pool=require("./../dbconncetion/dbconn");

const getCommentByUserID= async (UserID)=>{
    const results = await pool.query('SELECT Tekst FROM public."KomentarFakultet" where IDKorisnika = $1',[UserID]);
    return results.rows
};
const getCommentsByCollege= async (UniveristyID,CollegeName)=>{
    const results = await pool.query('SELECT Tekst FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName]);   
    return results.rows
};
const getGradeByCollege= async (UniveristyID,CollegeName)=>{
    const results = await pool.query('SELECT avg(Ocjena) as projsecnaOcjena FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName]);
    return results.rows; 
};

const getNumberOfComments=async(UniveristyID,CollegeName)=>{
    const results = await pool.query('SELECT count(Tekst) as ukupnoKomentara FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName]);  
    return results.rows;
};

const insertCommentCollege=async(UniveristyID,CollegeName,UserID,comment,grade)=>{
    const results = await pool.query('Insert into public."KomentarFakultet" (IDUniverziteta, ImeFakulteta, IDKorisnika, Tekst, Ocjena) Values ($1,$2,$3,$4,$5)',
    [UniveristyID,CollegeName,UserID,comment,grade]);
    return results.rows;

};

const updateCommentCollege=async(UniveristyID,CollegeName,UserID,comment,grade)=>{
    const resluts = await pool.query('Update into public."KomentarFakultet" set Tekst=$1, Ocjena=$2 where IDUniverziteta=$3 and ImeFakulteta=$4 and IDKorisnika=$5',
    [comment,grade,UniveristyID,CollegeName,UserID,]);
    return resluts.rows
};
    
module.exports={
    getCommentByUserID,
    getCommentsByCollege,
    getGradeByCollege,
    getNumberOfComments,
    insertCommentCollege,
    updateCommentCollege
}