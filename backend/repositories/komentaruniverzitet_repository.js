const pool = require("./../dbconnection/dbconn");

const getCommentByUser = async (UserID)=>{
    return await pool.query('Select Ime from public."KomentarUniverzitet" where IDKorisnika = $1',[UserID], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju komentara za korisnika. ', error)
        }
        return results.rows
    })
}

const getCommentByUniversity = async (UniversityID)=>{
    return await pool.query('Select Ime from public."KomentarUniverzitet" where IDUniverziteta = $1',[UniversityID], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju komentara za univerzitet. ', error)
        }
        return results.rows
    })
}

const insertComment = async (UserID, UniversityID, Text, Ocjena)=>{
    return await pool.query('Insert into public."KomentarUniverzitet" (IDUniverziteta,IDKorisnika, Tekst, Ocjena) Values($1, $2, $3, $4)',[UniversityID,UserID,Text, Ocjena],(error, results)=>{
        if(error)
            console.log("Neuspješan unos!", error);
        
        return results.rows
    })
}

const getOcjena = async (UniversityID)=>{
    return await pool.query('Select avg(Ocjena) from public."KomentarUniverzitet" where IDUniverziteta = $1',[UniversityID], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju komentara za univerzitet. ', error)
        }
        return results.rows
    })
}

const getNumOfComments = async (UniversityID)=>{
    return await pool.query('Select count(*) from public."KomentarUniverzitet" where IDUniverziteta = $1',[UniversityID], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju komentara za univerzitet. ', error)
        }
        return results.rows
    })
}

const updateComment = async (UserID, UniversityID, Text)=>{
    return await pool.query('Update public."KomentarUniverzitet" set Tekst = $3 where IDKorisnika = $1 and IDUniverziteta= $2 ',[UniversityID,UserID,Text],(error, results)=>{
        if(error)
            console.log("Neuspješan unos!", error);
        
        return results.rows
    })
}

module.exports = {
    getCommentByUniversity,
    getCommentByUser,
    insertComment,
    getOcjena,
    getNumOfComments,
    updateComment
}