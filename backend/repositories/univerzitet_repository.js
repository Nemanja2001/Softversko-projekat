const pool=require("./../dbconncetion/dbconn");


const getAllUniversities = async ()=>{
    return await pool.query('SELECT * FROM public."Univerzitet"', (error, results) => {
        if (error) {
          console.error('Error executing query', error);
          return;
        }
        return results.rows
      });   
};
const getUniversityByID = async (UniverstyID)=>{
    return await pool.query('Select * From public."Univerzitet" where ID = $1',[UniverstyID], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi univerziteta po ID.", error);
        }

        return results.rows
    })
};
const getUniversityByName = async (UniverstyName)=>{
    return await pool.query('Select * From public."Univerzitet" where Ime = $1',[UniverstyName], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi univerziteta po imenu.", error);
        }

        return results.rows
    })
};
const getUniversityByCountry = async (Country)=>{
    return await pool.query('Select * From public."Univerzitet" where Naziv_drzave = $1',[Country], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi univerziteta po državi.", error);
        }

        return results.rows
    })
};

const insertUniveristy = async (ime, naziv_drzave)=>{
    return await pool.query('Insert into public."Univerzitet (Ime, Naziv_drzave) Values ($1,$2)',
                            [ime, naziv_drzave],(error, results)=>{
                                if(error){
                                    console.log("Greška pri unosu korinsika");
                                }

                                return results.rows
                            })
};

module.exports ={
    getAllUniversities,
    getUniversityByID,
    getUniversityByName,
    getUniversityByCountry,
    insertUniveristy
}
