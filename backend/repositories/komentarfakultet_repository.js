const pool=require("./../dbconncetion/dbconn");

const getCommentByUserID= async (UserID)=>{
    return await pool.query('SELECT Tekst FROM public."KomentarFakultet" where IDKorisnika = $1',[UserID], (error, results) => {
        if (error) {
          console.error('Greska pri dobijanju komentara datog korisnika', error);
          return;
        }
        return results.rows
      });   
};
const getCommentsByCollege= async (UniveristyID,CollegeName)=>{
    return await pool.query('SELECT Tekst FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName], (error, results) => {
        if (error) {
          console.error('Greska kod dobijanja komentara za fakultet', error);
          return;
        }
        return results.rows
      });   
};
const getGradeByCollege= async (UniveristyID,CollegeName)=>{
    return await pool.query('SELECT avg(Ocjena) FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName], (error, results) => {
        if (error) {
          console.error('Greska kod racunanja prosjecne ocjene', error);
          return;
        }
        return results.rows
      });   
};

const getNumberOfComments=async(UniveristyID,CollegeName)=>{
    return await pool.query('SELECT count(Tekst) FROM public."KomentarFakultet" where IDUniverziteta = $1 and ImeFakulteta=$2',
    [UniveristyID,CollegeName], (error, results) => {
        if (error) {
          console.error('Greska pri racunu broja komentara', error);
          return;
        }
        return results.rows
      });  
};

const insertCommentCollege=async(UniveristyID,CollegeName,UserID,comment,grade)=>{
return await pool.query('Insert into public."KomentarFakultet" (IDUniverziteta, ImeFakulteta, IDKorisnika, Tekst, Ocjena) Values ($1,$2,$3,$4,$5)',
[UniveristyID,CollegeName,UserID,comment,grade],(error, results)=>{
    if(error){
        console.log("Greška pri unosu komentara za fakultet");
    }

    return results.rows
})
};

const updateCommentCollege=async(UniveristyID,CollegeName,UserID,comment,grade)=>{
    return await pool.query('Update into public."KomentarFakultet" set Tekst=$1, Ocjena=$2 where IDUniverziteta=$3 and ImeFakulteta=$4 and IDKorisnika=$5',
    [comment,grade,UniveristyID,CollegeName,UserID,],(error, results)=>{
        if(error){
            console.log("Greška pri update komentara na fakultetu");
        }
    
        return results.rows
    })
    };
    
module.exports={
    getCommentByUserID,
    getCommentsByCollege,
    getGradeByCollege,
    getNumberOfComments,
    insertCommentCollege,
    updateCommentCollege
}