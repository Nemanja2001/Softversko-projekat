import React from "react";

class Rezultat extends React.Component{
    constructor(props){
        super(props);
        this.state={UniversityID:props.UniversityID, UniversityName:props.UniversityName,FacultyName: props.FacultyName}
    }

    render(){
        let {UniversityID, UniversityName, FacultyName} = this.state;
        return <> 
        <div id="predlozi" onClick={()=>{
            localStorage.setItem('UniversityID', UniversityID);
            localStorage.setItem('faculty',FacultyName);
            window.location='/korisnik/'+localStorage.getItem('username')+'/univerziteti/'+UniversityID+'/fakulteti/'+FacultyName+'/fakultetskejedinice';
        }}>
            <div>{UniversityName}</div>
            <div>{FacultyName}</div>
        </div>
        </>
    }
}

export default Rezultat