const pool=require("./../dbconncetion/dbconn");

const getAllColleges = async ()=>{
    return await pool.query('SELECT * FROM public."Fakultet"', (error, results) => {
        if (error) {
          console.error('Error executing query', error);
          return;
        }
        return results.rows
      });   
};
const getCollegeByUniversityID = async (UniversityID)=>{
    return await pool.query('Select * From public."Fakultet" where ID = $1',[UniversityID], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi fakulteta po ID univerziteta.", error);
        }

        return results.rows
    })
};
const getCollegeByName = async (CollegeName)=>{
    return await pool.query('Select * From public."Univerzitet" where Ime = $1',[CollegeNameName], (error, results)=>{
        if(error){
            console.log("Greška pri pretrazi fakulteta po imenu.", error);
        }

        return results.rows
    })
};
const insertCollege= async (UniversityID,name)=>{
    return await pool.query('Insert into public."Univerzitet" (IDUniverziteta, Ime) Values ($1,$2)',
                            [UniversityID,name],(error, results)=>{
                                if(error){
                                    console.log("Greška pri unosu fakulteta");
                                }

                                return results.rows
                            })
};

module.exports={
    getAllColleges,
    getCollegeByName,
    getCollegeByUniversityID,
    insertCollege
}