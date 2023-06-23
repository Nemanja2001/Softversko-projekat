import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
class Admin extends React.Component{

    render(){
        return<>
            <div>
                <Header/>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}> 
                    <div>
                        <button>Dodaj novi Univerzitet</button>
                    </div> 
                    <div>
                        <button>Dodaj novi fakultet</button>
                    </div>
                    <div>
                        <button>Dodaj novu fakultetsku jedinicu</button>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        </>
    }

}

export default Admin