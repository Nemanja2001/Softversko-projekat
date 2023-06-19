
const pool = require("./../dbconnection/dbconn");
const crypto = require("crypto");
function encrypt_text(pass){
    // Postavi algoritam i kljuc ekripcije
    const algorithm = 'aes-256-cbc';
    const secretKey = '0123456789abcdef0123456789abcdef';

    // Tekst za ekripciju
    const plainText = pass;

    // Inicijalni vektor
    const iv = '0123456789abcdef';

    // Kreiranje chiper algoritma
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    // Enkripcija teeksta
    let encryptedData = cipher.update(plainText, 'utf8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData
}

const getAllUsers = async ()=>{
    
    const resluts = await pool.query('SELECT * FROM public."Korisnici"'); 
    return resluts.rows;   
};

const getUserByID = async (UserID)=>{
    const results = await pool.query('Select * From public."Korisnici" where "ID" = $1',[UserID]);
    return results.rows;
};

const getUserByUsername = async (username)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where "Username" = $1',[username]);
    return resluts.rows;
};

const getUserByEmail = async (email)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where "Email" = $1',[email]);
    return resluts.rows
};

const registerUser = async (credencials)=>{
    const resluts = await pool.query('Select * From public."Korisnici" where ("Email" = $1 or "Username" = $1) and "Password" = $2',[credencials.email, encrypt_text(credencials.pass)]);
    return resluts.rows
};

const insertUser = async (user)=>{
    const resluts = await pool.query('Insert into public."Korisnici" ("Name", "Surname", "Email", "Username", "Password", "Type") Values ($1,$2,$3,$4,$5,$6)',
                            [user.ime, user.prezime, user.email, user.username, encrypt_text(user.pass), user.type]);
    return resluts.rows
};

const updatePass = async (ID, credencial) => {
    const results = await pool.query('Update public."Korisnici" set Password = $1 where ID = $2', [encrypt_text(credencial.password),ID]);
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


  