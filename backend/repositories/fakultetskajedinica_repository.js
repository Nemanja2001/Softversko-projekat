const pool = require("../dbconnection/dbconn");

const getFacultyUnitsByFaculty = async (FacultyName, UniversityID)=>{
    const results = await pool.query('Select "Ime" from public."FakultetskaJedinica" where "ImeFakulteta" = $1 and "IDUniverzitet"=$2',
                                    [FacultyName, UniversityID])
    return results.rows
}

const getFacultyUnitsByUniversity = async (UniversityID)=>{
    const results = await pool.query('Select "Ime" from public."FakultetskaJedinica" where "IDUniverzitet" = $1',[UniversityID])
    return results.rows
}

const insertFacultyUnit = async (info)=>{
    const results = await pool.query('Insert into public."FakultetskaJedinica" ("IDUniverzitet", "ImeFakulteta", "Ime") Values($1, $2, $3)',
                            [info.UniversityID,info.FacultyName,info.Name])
    return results.rows 
}


module.exports = {
    getFacultyUnitsByFaculty,
    getFacultyUnitsByUniversity,
    insertFacultyUnit
}