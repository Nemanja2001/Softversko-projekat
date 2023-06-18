const pool = require("./../dbconnection/dbconn");

const getAllCountries = async function (){
    const res = await pool.query('Select * from public."Drzava"')
    const rezultat = res.rows
    return rezultat
}

const getCounrtyByName = async (name)=>{
    const result = await pool.query('Select * from public."Drzava" where "Ime" = $1',[name])
    return result.rows
}

const insertCountry = async (name)=>{
    const rezultat = await pool.query('Insert into public."Drzava" ("Ime") Values($1)',[name])
    return rezultat.rows
}

const updateCountry = async (name, newname)=>{
    const result =await pool.query('Update public."Drzava" set "Ime"=$1 where "Ime"=$2', [newname, name])
    res = result.rows
    return res
}

module.exports = {
    getAllCountries,
    getCounrtyByName,
    insertCountry,
    updateCountry
}

