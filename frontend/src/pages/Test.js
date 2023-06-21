import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'
import { setGlobalnaPromenljiva } from "../components/GlobalnePromjenljive";
import { getGlobalnaPromenljiva } from "../components/GlobalnePromjenljive";

function Test(){
    
    function racunanjeRezultata()
    {
        let nova_vr=getGlobalnaPromenljiva()+1;
        setGlobalnaPromenljiva(nova_vr);
    }
    function provjeriAnketu() {
       
        var forma = document.getElementById('anketa');
        var radioGrupa = forma.getElementsByTagName('input');
        var oznaceni=0;
      
        for (var i = 0; i < radioGrupa.length; i++) {
          if (radioGrupa[i].type === 'radio' && radioGrupa[i].checked === true) {
            oznaceni++;
            }
        }
        if(oznaceni!=radioGrupa.length/4)
        {
            alert('Molimo vas da odgovorite na sva pitanja u anketi. ');
            return false;
        }
        racunanjeRezultata();
        
        return true;
      }
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
                <table id="anketa">
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
                        <td><input type="radio" name="straniJezici" value="1"></input></td>
                        <td><input type="radio" name="straniJezici" value="2"></input></td>
                        <td><input type="radio" name="straniJezici" value="3"></input></td>
                        <td><input type="radio" name="straniJezici" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Ekonomski predmeti</td>
                        <td><input type="radio" name="ekonomija" value="1"></input></td>
                        <td><input type="radio" name="ekonomija" value="2"></input></td>
                        <td><input type="radio" name="ekonomija" value="3"></input></td>
                        <td><input type="radio" name="ekonomija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Književnost</td>
                        <td><input type="radio" name="knjizevnost" value="1"></input></td>
                        <td><input type="radio" name="knjizevnost" value="2"></input></td>
                        <td><input type="radio" name="knjizevnost" value="3"></input></td>
                        <td><input type="radio" name="knjizevnost" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Istorija</td>
                        <td><input type="radio" name="istorija" value="1"></input></td>
                        <td><input type="radio" name="istorija" value="2"></input></td>
                        <td><input type="radio" name="istorija" value="3"></input></td>
                        <td><input type="radio" name="istorija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Likovno</td>
                        <td><input type="radio" name="likovno" value="1"></input></td>
                        <td><input type="radio" name="likovno" value="2"></input></td>
                        <td><input type="radio" name="likovno" value="3"></input></td>
                        <td><input type="radio" name="likovno" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Informatika</td>
                        <td><input type="radio" name="informatika" value="1"></input></td>
                        <td><input type="radio" name="informatika" value="2"></input></td>
                        <td><input type="radio" name="informatika" value="3"></input></td>
                        <td><input type="radio" name="informatika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Muzicko</td>
                        <td><input type="radio" name="muzicko" value="1"></input></td>
                        <td><input type="radio" name="muzicko" value="2"></input></td>
                        <td><input type="radio" name="muzicko" value="3"></input></td>
                        <td><input type="radio" name="muzicko" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Fizicko</td>
                        <td><input type="radio" name="fizicko" value="1"></input></td>
                        <td><input type="radio" name="fizicko" value="2"></input></td>
                        <td><input type="radio" name="fizicko" value="3"></input></td>
                        <td><input type="radio" name="fizicko" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Hemija</td>
                        <td><input type="radio" name="hemija" value="1"></input></td>
                        <td><input type="radio" name="hemija" value="2"></input></td>
                        <td><input type="radio" name="hemija" value="3"></input></td>
                        <td><input type="radio" name="hemija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Psihologija</td>
                        <td><input type="radio" name="psihologija" value="1"></input></td>
                        <td><input type="radio" name="psihologija" value="2"></input></td>
                        <td><input type="radio" name="psihologija" value="3"></input></td>
                        <td><input type="radio" name="psihologija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Sociologija</td>
                        <td><input type="radio" name="sociologija" value="1"></input></td>
                        <td><input type="radio" name="sociologija" value="2"></input></td>
                        <td><input type="radio" name="sociologija" value="3"></input></td>
                        <td><input type="radio" name="sociologija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Anatomija</td>
                        <td><input type="radio" name="anatomija" value="1"></input></td>
                        <td><input type="radio" name="anatomija" value="2"></input></td>
                        <td><input type="radio" name="anatomija" value="3"></input></td>
                        <td><input type="radio" name="anatomija" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Poljoprivreda</td>
                        <td><input type="radio" name="poljoprivreda" value="1"></input></td>
                        <td><input type="radio" name="poljoprivreda" value="2"></input></td>
                        <td><input type="radio" name="poljoprivreda" value="3"></input></td>
                        <td><input type="radio" name="poljoprivreda" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Logika</td>
                        <td><input type="radio" name="logika" value="1"></input></td>
                        <td><input type="radio" name="logika" value="2"></input></td>
                        <td><input type="radio" name="logika" value="3"></input></td>
                        <td><input type="radio" name="logika" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Predmeti vezani za pravo</td>
                        <td><input type="radio" name="pravni" value="1"></input></td>
                        <td><input type="radio" name="pravni" value="2"></input></td>
                        <td><input type="radio" name="pravni" value="3"></input></td>
                        <td><input type="radio" name="pravni" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Filozofija</td>
                        <td><input type="radio" name="filozofija" value="1"></input></td>
                        <td><input type="radio" name="filozofija" value="2"></input></td>
                        <td><input type="radio" name="filozofija" value="3"></input></td>
                        <td><input type="radio" name="filozofija" value="4"></input></td>
                    </tr>
                </table>
            </div>
            <div>
            <input id="btnDalje" type="submit" value="Dalje" onClick={() => {if (provjeriAnketu()) {alert(getGlobalnaPromenljiva());window.location = '/Test2';}}}></input>
            </div>
        </div>
        <Footer/>   
        </>
    )
}
export default Test
