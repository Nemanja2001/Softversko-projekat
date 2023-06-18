const pool=require("./../dbconncetion/dbconn");

const getAllColleges = async ()=>{
    const results = await pool.query('SELECT * FROM public."Fakultet"');
    return results.rows   
};
const getCollegeByUniversityID = async (UniversityID)=>{
    const results =  await pool.query('Select * From public."Fakultet" where IDUniverziteta = $1',[UniversityID])
    return results.rows
};
const getCollegeByName = async (CollegeName,UniversityID)=>{
    const results = await pool.query('Select * From public."Fakultet" where Ime = $1 and IDUniverziteta = $2',[CollegeName, UniversityID])
    return results.rows
};
const insertCollege= async (UniversityID,name)=>{
    const results = await pool.query('Insert into public."Fakultet" (IDUniverziteta, Ime) Values ($1,$2)',[UniversityID,name])
    return results.rows
};

module.exports={
    getAllColleges,
    getCollegeByName,
    getCollegeByUniversityID,
    insertCollege
}