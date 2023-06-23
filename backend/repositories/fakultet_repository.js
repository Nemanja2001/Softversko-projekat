const pool=require("./../dbconnection/dbconn");

const getAllColleges = async ()=>{
    const results = await pool.query('SELECT * FROM public."Fakultet"');
    return results.rows   
};
const getCollegeByUniversityID = async (UniversityID)=>{
    const results =  await pool.query('Select * From public."Fakultet" where "IDUniverziteta" = $1',[UniversityID])
    return results.rows
};
const getCollegeByName = async (CollegeName,info)=>{
    const results = await pool.query('Select * From public."Fakultet" where "Ime" = $1 and "IDUniverziteta"=$2',[CollegeName,info.UniversityID])
    return results.rows
};
const insertCollege= async (info)=>{
    const results = await pool.query('Insert into public."Fakultet" ("IDUniverziteta", "Ime",oblast) Values ($1,$2,$3)',[info.UniversityID,info.name, info.oblast])
    return results.rows
};
const getCollegeByOblast = async(oblast)=>{
    const result = await pool.query('Select u."Ime" as "ImeUniverziteta", "IDUniverziteta",f."Ime" FROM public."Fakultet" f inner join public."Univerzitet" u on u."ID"=f."IDUniverziteta" WHERE "oblast"=$1',[oblast])
    return result.rows
}

module.exports={
    getAllColleges,
    getCollegeByName,
    getCollegeByUniversityID,
    insertCollege,
    getCollegeByOblast
}