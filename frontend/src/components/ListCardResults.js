import React from "react";
import axios from "axios";
import Rezultat from "./CardResult";

class ListCardResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {rezultat:[]};
    }
    dobij_fakultete_po_oblasti(){
        axios.get('http://localhost:3001/faculty/oblast/'+localStorage.getItem('rezultat'))
        .then(
            response=>{
                this.setState({rezultat:response.data})
            }
        )
        .catch(error=>console.error(error));
    }

    render(){
        this.dobij_fakultete_po_oblasti();
        let { rezultat } = this.state;
        return (
            <div className="test">
                <div className="rezNaslov">Rezultati Vašeg Testa</div>
                {localStorage.getItem('rezultat')==='oblast1' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za sport i mnoge druge aktivnosti koje podrazumijevaju 
                                                                            fizičku spremnost i takmičarski duh.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast2' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za umjetnost i mnoge druge aktivnosti koje podrazumijevaju 
                                                                            kreativnost i omogućavaju Vam realizaciju novih ideja.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast3' &&<div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za jezice, kao i mnoge druge aktivnosti koje podrazumijevaju 
                                                                            govorničke sposobnosti ali i kreativnost.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast4' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za humanističke nauke, poput istorije, filozofije, psihologije, pa cak i prava.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast5' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za oblasti poput medicine, farmacije, biologije, hemije, veterine.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast6' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za prirodne nauke, to jest matematiku, fiziku, programiranje, elektrotehniku.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
                {localStorage.getItem('rezultat')==='oblast7' && <div class="oTestu" ><p>Iz Vaših odgovora zaljučili smo da pored mnogih drugih oblasti za koje ste zainteresovani
                                                                            kod Vas preovladava zainteresovanost za oblasti poput građevine, arhitekture, dizajna.</p>
                                                                            <p> U nastavku su neki predlozi fakulteta za koje smatramo da bi mogli biti zainteresovani
                                                                            </p><br/></div>}
            {rezultat.map(x=>
                <Rezultat UniversityID={x.IDUniverziteta} FacultyName={x.Ime} UniversityName={x.ImeUniverziteta}/>)}
            </div>
        )
    }
}

export default ListCardResults