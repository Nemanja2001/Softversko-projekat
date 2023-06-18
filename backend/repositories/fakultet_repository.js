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
    const results = await pool.query('Insert into public."Fakultet" ("IDUniverziteta", "Ime") Values ($1,$2)',[info.UniversityID,info.name])
    return results.rows
};

module.exports={
    getAllColleges,
    getCollegeByName,
    getCollegeByUniversityID,
    insertCollege
}