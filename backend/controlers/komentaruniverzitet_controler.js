const { request, response } = require("express");
const pool = require("./../dbconnection/dbconn")
const commentUfunctions = require("./../repositories/komentaruniverzitet_repository")

const getCommentByUser = async(request, response)=>{
    const userID=request.params.userID
    const result=await commentUfunctions.getCommentByUser(userID)
    response.send(result)
};
const getCommentByUniversity = async(request,response)=>{
    const UniversityID=request.params.UniversityID
    const result=await commentUfunctions.getCommentByUniversity(UniversityID)
    response.send(result)
};
const getOcjena = async(request,response)=>{
    const UniversityID=request.params.UniversityID
    const result=await commentUfunctions.getOcjena(UniversityID)
    response.send(result)
};
const insertComment = async(request,response)=>{
    const result=await commentUfunctions.insertComment(request.body)
    response.send(result)
};
const getNumOfComments = async(request,response)=>{
    const UniversityID=request.params.UniversityID
    const result=await commentUfunctions.getNumOfComments(UniversityID)
    response.send(result)
};
const updateComment = async(request,response)=>{
    const result=await commentUfunctions.updateComment(request.body)
    response.send(result)
};


module.exports={
    getCommentByUser,
    getCommentByUniversity,
    getOcjena,
    insertComment,
    getNumOfComments,
    updateComment
}