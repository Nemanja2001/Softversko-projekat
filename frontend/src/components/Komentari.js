import React from "react";
import CardCommentList from "./CardListComment";
import { useLocation } from "react-router-dom";
function Komentari(){
    let location = useLocation()
    return(
        <div>
            <CardCommentList ulogovan={location.pathname.includes('korisnik')}/>
        </div>
    )
}

export default Komentari