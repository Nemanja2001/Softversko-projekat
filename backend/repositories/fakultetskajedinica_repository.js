const pool = require("../dbconnection/dbconn");

const getFacultyUnitsByFaculty = async (FacultyName)=>{
    const results = await pool.query('Select Ime from public."FakultetskaJedinica" where ImeFakulteta = $1',[FacultyName])
    return results.rows
}

const getFacultyUnitsByUniversity = async (UniversityID)=>{
    const results = await pool.query('Select Ime from public."FakultetskaJedinica" where IDUniverziteta = $1',[UniversityID])
    return results.rows
}

const insertFacultyUnit = async (UniversityID, FacultyName, Name)=>{
    const results = await pool.query('Insert into public."FakultetskaJedinica" (IDUniverziteta, ImeFakulteta, Ime) Values($1, $2, $3)',
                            [UniversityID,FacultyName,Name])
    return results.rows 
}


module.exports = {
    getFacultyUnitsByFaculty,
    getFacultyUnitsByUniversity,
    insertFacultyUnit
}