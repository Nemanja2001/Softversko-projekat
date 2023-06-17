const pool = require("./../dbconnection/dbconn");

const getAllCountries = async ()=>{
    return await pool.query('Select * from public."Drzava"',(error, results)=>{
        if(error){
            console.log("Greska pri selekciji drzava.", error);
        }
        return results.rows;
    })
}

const getCounrtyByName = async (name)=>{
    return await pool.query('Select * from public."Drzava" where Ime = \'$1\'',[name], (error, results)=>{
        if(error){
            console.log('Ne postoji država sa ovim imenom.', error);
        }
        return results.rows
    })
}

const insertCounry = async (name)=>{
    return await pool.query('Insert into public."Drzava" (Ime) Values(\'$1\')',[name],(error, results)=>{
        if(error)
            console.log("Neuspješan unos!", error);
        
        return results.rows
    })
}

const upadteCounry = async (name, newname)=>{
    return await pool.query('Update public."Drzava" set Ime=\'$1\' where Ime=\'$2\')', [newname, name], (error, results) => {
        if (error)
            console.log("Neuspješan update!", error);
        return results.rows;
    })
}

module.exports = {
    getAllCountries,
    getCounrtyByName,
    insertCounry,
    upadteCounry
}