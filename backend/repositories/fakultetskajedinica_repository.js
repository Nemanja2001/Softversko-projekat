const pool = require("../dbconnection/dbconn");

const getFacultyUnitsByFaculty = async (FacultyName)=>{
    return await pool.query('Select Ime from public."FakultetskaJedinica" where ImeFakulteta = $1',[FacultyName], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju fakultetskih jedinica. ', error)
        }

        return results.rows
    })
}

const getFacultyUnitsByUniversity = async (UniversityID)=>{
    return await pool.query('Select Ime from public."FakultetskaJedinica" where IDUniverziteta = $1',[UniversityID], (error, results)=>{
        if(error){
            console.log('Greška pri učitavanju univerzitetskih oblasti. ', error)
        }
        return results.rows
    })
}

const insertUniveristyUnit = async (UniversityID, FacultyName, Name)=>{
    return await pool.query('Insert into public."FakultetskaJedinica" (IDUniverziteta, ImeFakulteta, Ime) Values($1, $2, $3)',[UniversityID,FacultyName,Name],(error, results)=>{
        if(error)
            console.log("Neuspješan unos!", error);
        
        return results.rows
    })
}


module.exports = {
    getFacultyUnitsByFaculty,
    getFacultyUnitsByUniversity,
    insertUniveristyUnit
}