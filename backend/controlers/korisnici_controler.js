const pool = require("./../dbconnection/dbconn")
const userfunctions = require("./../repositories/korisnici_repository")
const jwt = require('jsonwebtoken');

const getAllUsers = async(request, response)=>{
    const result = await userfunctions.getAllUsers();
    response.send(result)
}

const getUserByID = async(request, response)=>{
    const userID = request.params.userID
    const resluts = await userfunctions.getUserByID(userID)
    response.send(resluts)
}

const getUserByEmail = async(request, response)=>{
    const email = request.params.email;
    const results = await userfunctions.getUserByEmail(email);
    response.send(results)
}

const getUserByUsername = async(request, response)=>{
    const username = request.params.username;
    const result = await userfunctions.getUserByUsername(username);
    response.send(result)
}

const insertNewUser = async(request, response)=>{
    const reslut =  await userfunctions.insertUser(request.body);
    response.send(reslut);
}

const updateUserPass = async(request, response)=>{
    const result = await userfunctions.updatePass(request.params.userID,request.body)
    response.send(result)
}

const login = async(request, response)=>{
    const email = request.body.email;
    const password = request.body.password;
    const result = await userfunctions.registerUser(email, password);

    let returnValue = { token: null, msg: "", status: 200 };

    if (typeof result[0] === 'undefined') {
        returnValue.msg = "Incorrect email/password";
        response.send(returnValue);
        return;
    }

    let toSend = { userID: result[0].ID, Username: result[0].Username, Email: result[0].Email, Password: result[0].Password, Name: result[0].Name, 
        Surname: result[0].Surname, isAdmin: result[0].Type};
    jwt.sign(toSend, 'SECRET', (err, token) => {
        returnValue.token = token;
        response.send(returnValue);
    }, { expiresIn: '1h' });

}

module.exports = {
    getAllUsers,
    getUserByID,
    getUserByEmail,
    getUserByUsername,
    insertNewUser,
    updateUserPass,
    login
}