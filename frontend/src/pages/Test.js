import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'

function Test(){
    return (<>
        <Header/>
        <div id="test">
            <div>
                <h1>Test profesionalne orijentacije</h1>
            </div>

            <div id="oTestu">
                <p>
                Čovjek provede 2/3 svog života radeći i iz tog razloga je važno da posao koji odabereš bude u skladu sa tvojim sposobnostima, karakteristikama ličnosti, tvojim željama i sklonostima, kako bi u njemu mogao/la da uživaš a samim tim i da budeš produktivniji i uspešniji.
                </p>
                <p>
                U želji da Vam pomognemo u donošenju važne odluke, molimo Vas da odradite test u nastavku!
                <br/>                
                Vaš zadatak je da procenite u kojoj mjeri volite navedene aktivnosti, odnosno koliko se na Vas odnose navedene tvrdnje na skali od 1 do 4. “1” je najniža ocjena, a “4” je najviša. Na kraju testa, dobićete informaciju koja profesionalna oblast Vam najviše odgovara i ponude za različite fakultete iz te oblasti koji bi Vas mogli zanimati.
                </p>
            </div>
            
            <div>
                <table>
                    <tr id="zaglavlje">
                        <th>Predmet</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                    <hr />
                    <tr>
                        <td>Biologija</td>
                        <td><input type="radio" name="biologija" value="1"></input></td>
                        <td><input type="radio" name="biologija" value="2"></input></td>
                        <td><input type="radio" name="biologija" value="3"></input></td>
                        <td><input type="radio" name="biologija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Fizika</td>
                        <td><input type="radio" name="fizika" value="1"></input></td>
                        <td><input type="radio" name="fizika" value="2"></input></td>
                        <td><input type="radio" name="fizika" value="3"></input></td>
                        <td><input type="radio" name="fizika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Matematika</td>
                        <td><input type="radio" name="matematika" value="1"></input></td>
                        <td><input type="radio" name="matematika" value="2"></input></td>
                        <td><input type="radio" name="matematika" value="3"></input></td>
                        <td><input type="radio" name="matematika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Strani jezici</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Ekonomski predmeti</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Književnost</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Istorija</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Likovno</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Informatika</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Muzicko</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Fizicko</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Hemija</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Psihologija</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Sociologija</td>
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
                        <td>Matematika</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Predmeti vezani za pravo</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Filozofija</td>
                        <td><input type="radio" name="sport" value="1"></input></td>
                        <td><input type="radio" name="sport" value="2"></input></td>
                        <td><input type="radio" name="sport" value="3"></input></td>
                        <td><input type="radio" name="sport" value="4"></input></td>
                    </tr>
                </table>
            </div>
            <div>
            <input id="btnDalje" type="submit" value="Dalje" onClick={()=>window.location='/Test2'}></input>
            </div>
        </div>
        <Footer/>   
        </>
    )
}
export default Test