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
    const result=await facultyfunctions.getCollegeByName(name,request.body)
    response.send(result)
};
const insertCollege = async (request,response)=>{
    const result=await facultyfunctions.insertCollege(request.body)
    response.send(result)
};
const getCollegeByOblast = async (request,response)=>{
    const oblast=request.params.oblast
    const result=await facultyfunctions.getCollegeByOblast(oblast)
    response.send(result)
};

module.exports={
    getAllColleges,
    getCollegeByUniversityID,
    getCollegeByName,
    insertCollege,
    getCollegeByOblast
}