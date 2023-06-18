const pool = require("./../dbconnection/dbconn")
const facultyunitfunctions = require("./../repositories/fakultetskajedinica_repository")

const getFacultyUnitsByFaculty = async(request, response)=>{
    const results  = await facultyunitfunctions.getFacultyUnitsByFaculty(request.body.FacultyName, request.body.UniversityID)
    response.send(results)
}

const getFacultyUnitsByUniversity = async(request, response)=>{
    const results = await facultyunitfunctions.getFacultyUnitsByUniversity(request.params.UniversityID)
    response.send(results)
}

const insertFacultyUnit = async(request, response)=>{
    const results = facultyunitfunctions.insertFacultyUnit(request.body)
    response.send(results)
}

module.exports = {
    getFacultyUnitsByFaculty,
    getFacultyUnitsByUniversity,
    insertFacultyUnit
}