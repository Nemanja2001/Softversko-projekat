import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'

function Test(){
    function racunanjeTesta(){
        var forma = document.getElementById('anketa');
        var radioGrupa = forma.getElementsByTagName('input');
        
        localStorage.setItem('oblast1',0); /*sport*/ 
        localStorage.setItem('oblast2',0) /*umjetnost*/ 
        localStorage.setItem('oblast3',0) /*jezici*/
        localStorage.setItem('oblast4',0) /*humanisticke*/
        localStorage.setItem('oblast5',0) /*medicina*/
        localStorage.setItem('oblast6',0) /*prirodne*/
        localStorage.setItem('oblast7',0) /*gradjevina,arh,dizajn*/
        
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'biologija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'fizika'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'matematika'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
            
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'straniJezici'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'ekonomija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'knjizevnost'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'istorija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'likovno'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'informatika'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'muzicko'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'fizicko'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'hemija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'psihologija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'sociologija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'anatomija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'poljoprivreda'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'logika'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pravni'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (let i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'filozofija'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
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
        racunanjeTesta();
        return true;
      }
    return (<>
        <Header/>
        <div class="test">
            <div>
                <h1>Test profesionalne orijentacije</h1>
            </div>
           
            <div class="oTestu">
                <p>               
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
            <input class="btn" type="submit" value="Dalje" onClick={() => {if (provjeriAnketu()){window.location = '/korisnik/'+localStorage.getItem('username')+'/testorijentacije/Test2';}}}></input>
            </div>
        </div>
        <Footer/>   
        </>
    )
}
export default Test
