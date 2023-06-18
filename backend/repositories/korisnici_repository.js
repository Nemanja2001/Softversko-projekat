
const pool = require("./../dbconnection/dbconn");
const crypto = require("crypto");
function encrypt_text(pass){
    // Postavi algoritam i kljuc ekripcije
    const algorithm = 'aes-256-cbc';
    const secretKey = 'hY5p2@HdL9qW1sXc';

    // Tekst za ekripciju
    const plainText = pass;

    // Inicijalni vektor
    const iv = crypto.randomBytes(16);

    // Kreiranje chiper algoritma
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    // Enkripcija teksta
    let encryptedData = cipher.update(plainText, 'utf8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData
}

const getAllUsers = async ()=>{
    
    const resluts = await pool.query('SELECT * FROM public."Korisnici"'); 
    return resluts.rows;   
};

const getUserByID = async (UserID)=>{
    const results = await pool.query('Select * From public."Korisnici" where ID = $1',[UserID]);
    return results.rows;
};

const getUserByUsername = async (username)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where Username = $1',[username]);
    return resluts.rows;
};

const getUserByEmail = async (email)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where Email = $1',[email]);
    return resluts.rows
};

const registerUser = async (email, pass)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where (Email = $1 || Username = $1) and Password = $2',[email, encrypt_text(pass)]);
    return resluts.rowCount
};

const insertUser = async (ime, prezime, email, username, password, type)=>{
    const resluts = await pool.query('Insert into public."Korisnici (Name, Surname, Email, Username, Password, Type) Values ($1,$2,$3,$4,$5,$6)',
                            [ime, prezime, email, username, encrypt_text(password), type]);
    return resluts.rows
};

const updatePass = async (ID, password) => {
    const results = await pool.query('Update public."Koirsnici" set Password = \'$1\' where ID = $2', [encrypt_text(password),ID]);
    return results.rows
} 

module.exports ={
    getAllUsers,
    getUserByID,
    getUserByUsername,
    getUserByEmail,
    insertUser,
    updatePass,
    registerUser
}


  