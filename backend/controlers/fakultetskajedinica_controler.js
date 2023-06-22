const pool = require("./../dbconnection/dbconn")
const facultyunitfunctions = require("./../repositories/fakultetskajedinica_repository")

const getFacultyUnitsByFaculty = async(request, response)=>{
    const encodedData = request.query.data;
    const decodedData = JSON.parse(decodeURIComponent(encodedData));
    const results  = await facultyunitfunctions.getFacultyUnitsByFaculty(decodedData.FacultyName, decodedData.UniversityID)
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