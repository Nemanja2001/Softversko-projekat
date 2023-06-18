const pool = require("./../dbconnection/dbconn")
const universityfunctions = require("./../repositories/univerzitet_repository")

const getAllUniversities = async(request, response)=>{
    const result = await universityfunctions.getAllUniversities();
    response.send(result)
}

const getUniversityByID = async(request, response)=>{
    const universityID = request.params.uniID;
    const result = await universityfunctions.getUniversityByID(universityID)
    response.send(result)
}

const getUniversityByName = async(request, response)=>{
    const result = await universityfunctions.getUniversityByName(request.body);
    response.send(result)
}

const getUniversitiesByCountry = async(request, response)=>{
    const results = await universityfunctions.getUniversityByCountry(request.params.uniName)
    response.send(results)
}

const insertUniveristy = async(request, response)=>{
    const result = await universityfunctions.insertUniveristy(request.body)
    response.send(result)
}

module.exports = {
    getAllUniversities,
    getUniversityByID,
    getUniversityByName,
    getUniversitiesByCountry,
    insertUniveristy
}
