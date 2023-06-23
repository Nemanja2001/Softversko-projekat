const pool = require("./../dbconnection/dbconn");

const getCommentByUser = async (UserID)=>{
    const resluts = await pool.query('Select * from public."KomentarUniverzitet" where "IDKorisnika" = $1',[UserID]);
    return resluts.rows
}

const getCommentByUniversity = async (UniversityID)=>{
    const resluts = await pool.query('Select "Name","Surname", "Tekst", "Ocjena" from public."KomentarUniverzitet" inneer join public."Korisnici" on "ID"="IDKorisnika" where "IDUniverziteta" = $1',[UniversityID]);
    return resluts.rows
}

const insertComment = async (info)=>{
    const resluts = await pool.query('Insert into public."KomentarUniverzitet" ("IDUniverziteta","IDKorisnika", "Tekst", "Ocjena") Values($1, $2, $3, $4)'
                                    ,[info.UniversityID,info.UserID,info.Text, info.Ocjena]);
    return resluts.rows
}

const getOcjena = async (UniversityID)=>{
    const results = await pool.query('Select avg("Ocjena") as prosjecnaOcjena from public."KomentarUniverzitet" where "IDUniverziteta" = $1',
                                    [UniversityID])
    return results.rows
}

const getNumOfComments = async (UniversityID)=>{
    const resluts = await pool.query('Select count(*) as ukupnoKomentara from public."KomentarUniverzitet" where "IDUniverziteta" = $1',
                                    [UniversityID]);
    return resluts.rows
}

const updateComment = async (info)=>{
    const resluts = await pool.query('Update public."KomentarUniverzitet" set "Tekst" = $3, "Ocjena" =$4 where "IDKorisnika" = $1 and "IDUniverziteta"= $2 ',
                                    [info.UniversityID,info.UserID,info.Text,info.Ocjena]);
    return resluts.rows
}

module.exports = {
    getCommentByUniversity,
    getCommentByUser,
    insertComment,
    getOcjena,
    getNumOfComments,
    updateComment
}