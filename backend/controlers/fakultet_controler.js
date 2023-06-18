const facultyfunctions = require("./../repositories/fakultet_repository")

const getAllColleges = async(request, response)=>{
    const result = await facultyfunctions.getAllColleges();
    response.send(result)
}
const getCollegeByUniversityID = async (request,response)=>{
    const UniversityID=request.params.UniversityID
    const result=await facultyfunctions.getCollegeByUniversityID(UniversityID)
    response.send(result)
    
};
const getCollegeByName = async (request,response)=>{
    const name=request.params.name
    const universityID=request.params.UniversityID
    const result=await facultyfunctions.getCollegeByUniversityID(name,universityID)
    response.send(result)
};
const insertCollege = async (request,response)=>{
    const universityID=request.params.UniversityID
    const name=request.params.name
    const result=await facultyfunctions.insertCollege(universityID,name)
    response.send(result)
};
module.exports={
    getAllColleges,
    getCollegeByUniversityID,
    getCollegeByName,
    insertCollege
}