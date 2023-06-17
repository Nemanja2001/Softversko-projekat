
const pool = require("./../dbconnection/dbconn");
const crypto = require("crypto");
function encrypt_text(pass){
    // Set the encryption algorithm and secret key
    const algorithm = 'aes-256-cbc';
    const secretKey = 'hY5p2@HdL9qW1sXc';

    // The text to be encrypted
    const plainText = pass;

    // Create an initialization vector (IV)
    const iv = crypto.randomBytes(16);

    // Create a cipher object
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    // Encrypt the text
    let encryptedData = cipher.update(plainText, 'utf8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData
}

const getAllUsers = async ()=>{
    
    return await pool.query('SELECT * FROM public."Korisnici"', (error, results) => {
        if (error) {
          console.error('Error executing query', error);
          return;
        }
        return results.rows
      });    
};

const getUserByID = async (UserID)=>{
    return await pool.query('Select * From public."Korisnici" where ID = $1',[UserID], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi korisnika po ID.", error);
        }

        return results.rows
    })
};

const getUserByUsername = async (username)=>{
    return await pool.query('Select * From public."Korisnici" where Username = $1',[username], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi korisnika po korisničkom imenu.", error);
        }

        return results.rows
    })
};

const getUserByEmail = async (email)=>{
    return await pool.query('Select * From public."Korisnici" where Email = $1',[email], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi korisnika po email-u.", error);
        }

        return results.rows
    })
};

const registerUser = async (email, pass)=>{
    return await pool.query('Select * From public."Korisnici" where (Email = $1 || Username = $1) and Password = $2',[email, encrypt_text(pass)], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi korisnika.", error);
        }

        return results.rows
    })
};

const insertUser = async (ime, prezime, email, username, password, type)=>{
    return await pool.query('Insert into public."Korisnici (Name, Surname, Email, Username, Password, Type) Values ($1,$2,$3,$4,$5,$6)',
                            [ime, prezime, email, username, encrypt_text(password), type],(error, results)=>{
                                if(error){
                                    console.log("Greška pri unosu korinsika");
                                }

                                return results.rows
                            })
};

const updatePass = async (ID, password) => {
    return await pool.query('Update public."Koirsnici" set Password = \'$1\' where ID = $2', [encrypt_text(password),ID], (error, results)=>{
        if(error){
            console.log("Greška pri Update korinsika.", error);
        }

        return results.rows
    })
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


  