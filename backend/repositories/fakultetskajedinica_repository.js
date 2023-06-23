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
    const results = await pool.query('Insert into public."FakultetskaJedinica" ("IDUniverzitet", "ImeFakulteta", "Ime","URL","Opis","Slika") Values($1, $2, $3, $4, $5, $6)',
                            [info.UniversityID,info.FacultyName,info.Name, info.URL,info.Opis, info.Slika])
    return results.rows 
}


module.exports = {
    getFacultyUnitsByFaculty,
    getFacultyUnitsByUniversity,
    insertFacultyUnit
}