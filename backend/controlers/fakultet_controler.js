const { request, response } = require("express");
const pool = require("./../dbconnection/dbconn")
const userfunctions = require("./../repositories/fakultet_repository")

const getAllColleges = async(request, response)=>{
    const result = await userfunctions.getAllColleges();
    response.send(result)
}
const getCollegeByUniversityID = async (request,response)=>{
    const UniversityID=request.params.UniversityID
    const result=await userfunctions.getCollegeByUniversityID(UniversityID)
    response.send(result)
    
};
const getCollegeByName = async (request,response)=>{
    const name=request.params.name
    const universityID=request.params.UniversityID
    const result=await userfunctions.getCollegeByUniversityID(name,universityID)
    response.send(result)
};
const insertCollege = async (request,response)=>{
    const universityID=request.params.UniversityID
    const name=request.params.name
    const result=await userfunctions.insertCollege(universityID,name)
    response.send(result)
};
module.exports={
    getAllColleges,
    getCollegeByUniversityID,
    getCollegeByName,
    insertCollege
}