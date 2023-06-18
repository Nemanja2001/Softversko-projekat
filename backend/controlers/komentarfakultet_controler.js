const pool = require("./../dbconnection/dbconn")
const comementfacultyfunctions = require("./../repositories/komentarfakultet_repository")

const getCommentByUserID = async(request, response)=>{
    const results = await comementfacultyfunctions.getCommentByUserID(request.body.userID)
    response.send(results)
}

const getCommentsByCollege = async(request, response)=>{
    const results = await comementfacultyfunctions.getCommentsByCollege(request.body)
    response.send(results)
}

const getGradeByCollege = async(request, response)=>{
    const results = await comementfacultyfunctions.getGradeByCollege(request.body)
    response.send(results)
}

const getNumberOfComments = async(request, response)=>{
    const result = await comementfacultyfunctions.getNumberOfComments(request.body)
    response.send(result)
}

const insertCommentCollege = async(request, response)=>{
    const reslut = await comementfacultyfunctions.insertCommentCollege(request.body)
    response.send(reslut)
}

const updateCommentCollege = async(request, response)=>{
    const reslut = await comementfacultyfunctions.updateCommentCollege(request.body)
    response.send(reslut)
}

module.exports = {
    getCommentByUserID,
    getCommentsByCollege,
    getGradeByCollege,
    getNumberOfComments,
    insertCommentCollege,
    updateCommentCollege
}
