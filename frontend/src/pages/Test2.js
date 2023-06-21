import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'

function Test2(){
    return (<>
        <Header/>
        <div id="test">
            <div>
                <h1>Test profesionalne orijentacije</h1>
            </div>

            <div >
                <p id="napomena">
                    Napomena:“1” je najniža, a “4” najviša ocjena.
                </p>
            </div>
            <div>
                <table>
                    <tr id="zaglavlje">
                        <th>Aktivnosti</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                    <hr />
                    <tr>
                        <td>Vežbam i treniram svakodnevno.</td>
                        <td><input type="radio" name="biologija" value="1"></input></td>
                        <td><input type="radio" name="biologija" value="2"></input></td>
                        <td><input type="radio" name="biologija" value="3"></input></td>
                        <td><input type="radio" name="biologija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživao/la bih u aplauzima i ovacijama publike.</td>
                        <td><input type="radio" name="fizika" value="1"></input></td>
                        <td><input type="radio" name="fizika" value="2"></input></td>
                        <td><input type="radio" name="fizika" value="3"></input></td>
                        <td><input type="radio" name="fizika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u takmičenjima.</td>
                        <td><input type="radio" name="matematika" value="1"></input></td>
                        <td><input type="radio" name="matematika" value="2"></input></td>
                        <td><input type="radio" name="matematika" value="3"></input></td>
                        <td><input type="radio" name="matematika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Prija mi da ispoljavam svoju kreativnost kroz slikanje i pisanje.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Redovno pratim i posećujem sportske dogadjaje.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Imam smisla za uređivanje enterijera.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u fotografisanju i snimanju različitih dogadjaja.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Moj cilj je da budem originalan/a i drugačiji/a od ostalih</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da pravim figure od gline i sličnih materijala.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživao/la bih u profesiji koja podrazumeva savetovanje drugih kako da reše svoje probleme.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Rado pomažem starijim i bolesnim ljudima.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u učenju različitih stranih jezika.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Anatomija</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Poljoprivreda</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Logika</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Dešava se da sklapam i servisiram računarsku opremu.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da citam</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Često posjecujem pozorišta</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Vrlo sam zainteresovana za istraživanje istorije kao i kultura različitih naroda</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Matematičke jednačine i sve što ima veze sa brojkama, rešavam lako i brzo.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Kritički razmišljam o stvarima koje vidim, čujem ili pročitam.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Veoma dobro poznajem rad u različitim kompjuterskim programima.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da istražujem poreklo biljnog i životinjskog sveta.	1</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da istražujem prirodne sile (elektricitet, gravitaciju,…).</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Robotika je veoma interesantna oblast.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Zanimaju me molekuli, atomi i njihova struktura</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Interesuju me uzroci različitih prirodnih pojava.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Interesuje me kako funkcionišu različiti aparati i uređaji.</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                </table>
            </div>
            <div>
            <input id="btnDalje" type="submit" value="Submit" ></input>
            </div>
        </div>
        <Footer/>   
        </>
    )
}
export default Test2