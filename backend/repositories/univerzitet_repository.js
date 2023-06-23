const pool=require("./../dbconnection/dbconn");


const getAllUniversities = async ()=>{
    const resluts = await pool.query('SELECT * FROM public."Univerzitet"');   
    return resluts.rows
};
const getUniversityByID = async (UniverstyID)=>{
    const resluts = await pool.query('Select * From public."Univerzitet" where "ID" = $1',[UniverstyID]);
    return resluts.rows
};
const getUniversityByName = async (UniverstyName)=>{
    const reluslts = await pool.query('Select * From public."Univerzitet" where "Ime" = $1',[UniverstyName]);
    return reluslts.rows
};
const getUniversityByCountry = async (Country)=>{
    const resluts = await pool.query('Select * From public."Univerzitet" where "Naziv_drzave" = $1',[Country.Name]);
    return resluts.rows
};

const insertUniveristy = async (info)=>{
    const resluts = await pool.query('Insert into public."Univerzitet" ("Ime", "Naziv_drzave","Opis","Slika") Values ($1,$2,$3,$4)',
                            [info.ime, info.naziv_drzave, info.opis,info.slika]);
    return resluts.rows
};

module.exports ={
    getAllUniversities,
    getUniversityByID,
    getUniversityByName,
    getUniversityByCountry,
    insertUniveristy
}
