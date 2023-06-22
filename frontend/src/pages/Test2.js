import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Test.css'
function Test2(){
    function maks(){
        var m=0;
        var m1='';
        if(parseInt(localStorage.getItem('oblast1'))>m){
            m=parseInt(localStorage.getItem('oblast1'));
            m1='oblast1';
        }
        if(parseInt(localStorage.getItem('oblast2'))>m){
            m=parseInt(localStorage.getItem('oblast2'))
            m1='oblast2';
        }
         if(parseInt(localStorage.getItem('oblast3'))>m){
            m=parseInt(localStorage.getItem('oblast3'))
            m1='oblast3';
        }
         if(parseInt(localStorage.getItem('oblast4'))>m){
            m=parseInt(localStorage.getItem('oblast4'))
            m1='oblast4';
        }
         if(parseInt(localStorage.getItem('oblast5'))>m){
            m=parseInt(localStorage.getItem('oblast5'))
            m1='oblast5';
        }
        if(parseInt(localStorage.getItem('oblast6'))>m){
            m=parseInt(localStorage.getItem('oblast6'))
            m1='oblast6';
        }
        if(parseInt(localStorage.getItem('oblast7'))>m){
            m=parseInt(localStorage.getItem('oblast7'))
            m1='oblast7';
        }
        
        localStorage.setItem('rezultat',m1);
        alert(localStorage.getItem('rezultat'))
    }
    function racunanjeTesta(){
        var forma = document.getElementById('anketa2');
        var radioGrupa = forma.getElementsByTagName('input');
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje1'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+(parseInt(radioGrupa[i].value,10))*2);
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje2'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje3'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+(parseInt(radioGrupa[i].value,10))*2);
            }
        }
         for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje4'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje5'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+(parseInt(radioGrupa[i].value,10))*2);
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje6'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje7'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje8'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje9'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje10'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje11'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje12'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje13'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast1',parseInt(localStorage.getItem('oblast1'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje14'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje15'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje16'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje17'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje18'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje19'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje20'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje21'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast4',parseInt(localStorage.getItem('oblast4'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast2',parseInt(localStorage.getItem('oblast2'))+parseInt(radioGrupa[i].value,10));
                localStorage.setItem('oblast3',parseInt(localStorage.getItem('oblast3'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje22'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje23'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje24'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje25'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje26'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje27'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje28'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast6',parseInt(localStorage.getItem('oblast6'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje29'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast5',parseInt(localStorage.getItem('oblast5'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje30'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        for (var i = 0; i < radioGrupa.length; i++) {
            if (radioGrupa[i].type === 'radio' && radioGrupa[i].name === 'pitanje31'&& radioGrupa[i].checked === true) {
                localStorage.setItem('oblast7',parseInt(localStorage.getItem('oblast7'))+parseInt(radioGrupa[i].value,10));
            }
        }
        alert(localStorage.getItem('oblast1')+' '+localStorage.getItem('oblast2')+' '+localStorage.getItem('oblast3')+' '+localStorage.getItem('oblast4')+' '+
        localStorage.getItem('oblast5')+' '+localStorage.getItem('oblast6')+' '+localStorage.getItem('oblast7'))
        maks();
    }
    function provjeriAnketu() {
       
        var forma = document.getElementById('anketa2');
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

            <div >
                <p id="napomena">
                    Napomena:“1” je najniža, a “4” najviša ocjena.
                </p>
            </div>
            <div>
                <table id="anketa2">
                    <tr id="zaglavlje">
                        <th>Aktivnosti</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                    <hr />
                    <tr>
                        <td >Vežbam i treniram svakodnevno.</td>
                        <td><input type="radio" name="pitanje1" value="1"></input></td>
                        <td><input type="radio" name="pitanje1" value="2"></input></td>
                        <td><input type="radio" name="pitanje1" value="3"></input></td>
                        <td><input type="radio" name="pitanje1" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživao/la bih u aplauzima i ovacijama publike.</td>
                        <td><input type="radio" name="pitanje2" value="1"></input></td>
                        <td><input type="radio" name="pitanje2" value="2"></input></td>
                        <td><input type="radio" name="pitanje2" value="3"></input></td>
                        <td><input type="radio" name="pitanje2" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u takmičenjima.</td>
                        <td><input type="radio" name="pitanje3" value="1"></input></td>
                        <td><input type="radio" name="pitanje3" value="2"></input></td>
                        <td><input type="radio" name="pitanje3" value="3"></input></td>
                        <td><input type="radio" name="pitanje3" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Prija mi da ispoljavam svoju kreativnost kroz slikanje i pisanje.</td>
                        <td><input type="radio" name="pitanje4" value="1"></input></td>
                        <td><input type="radio" name="pitanje4" value="2"></input></td>
                        <td><input type="radio" name="pitanje4" value="3"></input></td>
                        <td><input type="radio" name="pitanje4" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Redovno pratim i posjećujem sportske dogadjaje.</td>
                        <td><input type="radio" name="pitanje5" value="1"></input></td>
                        <td><input type="radio" name="pitanje5" value="2"></input></td>
                        <td><input type="radio" name="pitanje5" value="3"></input></td>
                        <td><input type="radio" name="pitanje5" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Imam smisla za uređivanje enterijera.</td>
                        <td><input type="radio" name="pitanje6" value="1"></input></td>
                        <td><input type="radio" name="pitanje6" value="2"></input></td>
                        <td><input type="radio" name="pitanje6" value="3"></input></td>
                        <td><input type="radio" name="pitanje6" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u fotografisanju i snimanju različitih dogadjaja.</td>
                        <td><input type="radio" name="pitanje7" value="1"></input></td>
                        <td><input type="radio" name="pitanje7" value="2"></input></td>
                        <td><input type="radio" name="pitanje7" value="3"></input></td>
                        <td><input type="radio" name="pitanje7" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Moj cilj je da budem originalan/a i drugačiji/a od ostalih</td>
                        <td><input type="radio" name="pitanje8" value="1"></input></td>
                        <td><input type="radio" name="pitanje8" value="2"></input></td>
                        <td><input type="radio" name="pitanje8" value="3"></input></td>
                        <td><input type="radio" name="pitanje8" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da pravim figure od gline i sličnih materijala.</td>
                        <td><input type="radio" name="pitanje9" value="1"></input></td>
                        <td><input type="radio" name="pitanje9" value="2"></input></td>
                        <td><input type="radio" name="pitanje9" value="3"></input></td>
                        <td><input type="radio" name="pitanje9" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživao/la bih u profesiji koja podrazumijeva savjetovanje drugih kako da reše svoje probleme.</td>
                        <td><input type="radio" name="pitanje10" value="1"></input></td>
                        <td><input type="radio" name="pitanje10" value="2"></input></td>
                        <td><input type="radio" name="pitanje10" value="3"></input></td>
                        <td><input type="radio" name="pitanje10" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Rado pomažem starijim i bolesnim ljudima.</td>
                        <td><input type="radio" name="pitanje11" value="1"></input></td>
                        <td><input type="radio" name="pitanje11" value="2"></input></td>
                        <td><input type="radio" name="pitanje11" value="3"></input></td>
                        <td><input type="radio" name="pitanje11" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Uživam u učenju različitih stranih jezika.</td>
                        <td><input type="radio" name="pitanje12" value="1"></input></td>
                        <td><input type="radio" name="pitanje12" value="2"></input></td>
                        <td><input type="radio" name="pitanje12" value="3"></input></td>
                        <td><input type="radio" name="pitanje12" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim plivanje/skijanje.</td>
                        <td><input type="radio" name="pitanje13" value="1"></input></td>
                        <td><input type="radio" name="pitanje13" value="2"></input></td>
                        <td><input type="radio" name="pitanje13" value="3"></input></td>
                        <td><input type="radio" name="pitanje13" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Posjećujem gradsku biblioteku.</td>
                        <td><input type="radio" name="pitanje14" value="1"></input></td>
                        <td><input type="radio" name="pitanje14" value="2"></input></td>
                        <td><input type="radio" name="pitanje14" value="3"></input></td>
                        <td><input type="radio" name="pitanje14" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Ispunjava me vrijeme provedeno sa zivotinjama.</td>
                        <td><input type="radio" name="pitanje15" value="1"></input></td>
                        <td><input type="radio" name="pitanje15" value="2"></input></td>
                        <td><input type="radio" name="pitanje15" value="3"></input></td>
                        <td><input type="radio" name="pitanje15" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Dešava se da sklapam i servisiram računarsku opremu.</td>
                        <td><input type="radio" name="pitanje16" value="1"></input></td>
                        <td><input type="radio" name="pitanje16" value="2"></input></td>
                        <td><input type="radio" name="pitanje16" value="3"></input></td>
                        <td><input type="radio" name="pitanje16" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da čitam</td>
                        <td><input type="radio" name="pitanje17" value="1"></input></td>
                        <td><input type="radio" name="pitanje17" value="2"></input></td>
                        <td><input type="radio" name="pitanje17" value="3"></input></td>
                        <td><input type="radio" name="pitanje17" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Često posjecujem pozorišta</td>
                        <td><input type="radio" name="pitanje18" value="1"></input></td>
                        <td><input type="radio" name="pitanje18" value="2"></input></td>
                        <td><input type="radio" name="pitanje18" value="3"></input></td>
                        <td><input type="radio" name="pitanje18" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Vrlo sam zainteresovan/a za istraživanje istorije kao i kultura različitih naroda</td>
                        <td><input type="radio" name="pitanje19" value="1"></input></td>
                        <td><input type="radio" name="pitanje19" value="2"></input></td>
                        <td><input type="radio" name="pitanje19" value="3"></input></td>
                        <td><input type="radio" name="pitanje19" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Matematičke jednačine i sve što ima veze sa brojkama, rešavam lako i brzo.</td>
                        <td><input type="radio" name="pitanje20" value="1"></input></td>
                        <td><input type="radio" name="pitanje20" value="2"></input></td>
                        <td><input type="radio" name="pitanje20" value="3"></input></td>
                        <td><input type="radio" name="pitanje20" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Kritički razmišljam o stvarima koje vidim, čujem ili pročitam.</td>
                        <td><input type="radio" name="pitanje21" value="1"></input></td>
                        <td><input type="radio" name="pitanje21" value="2"></input></td>
                        <td><input type="radio" name="pitanje21" value="3"></input></td>
                        <td><input type="radio" name="pitanje21" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Veoma dobro poznajem rad u različitim kompjuterskim programima.</td>
                        <td><input type="radio" name="pitanje22" value="1"></input></td>
                        <td><input type="radio" name="pitanje22" value="2"></input></td>
                        <td><input type="radio" name="pitanje22" value="3"></input></td>
                        <td><input type="radio" name="pitanje22" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da istražujem poreklo biljnog i životinjskog svijeta.</td>
                        <td><input type="radio" name="pitanje23" value="1"></input></td>
                        <td><input type="radio" name="pitanje23" value="2"></input></td>
                        <td><input type="radio" name="pitanje23" value="3"></input></td>
                        <td><input type="radio" name="pitanje23" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Volim da istražujem prirodne sile (elektricitet, gravitaciju,…).</td>
                        <td><input type="radio" name="pitanje24" value="1"></input></td>
                        <td><input type="radio" name="pitanje24" value="2"></input></td>
                        <td><input type="radio" name="pitanje24" value="3"></input></td>
                        <td><input type="radio" name="pitanje24" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Robotika je veoma interesantna oblast.</td>
                        <td><input type="radio" name="pitanje25" value="1"></input></td>
                        <td><input type="radio" name="pitanje25" value="2"></input></td>
                        <td><input type="radio" name="pitanje25" value="3"></input></td>
                        <td><input type="radio" name="pitanje25" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Zanimaju me molekuli, atomi i njihova struktura</td>
                        <td><input type="radio" name="pitanje26" value="1"></input></td>
                        <td><input type="radio" name="pitanje26" value="2"></input></td>
                        <td><input type="radio" name="pitanje26" value="3"></input></td>
                        <td><input type="radio" name="pitanje26" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Interesuju me uzroci različitih prirodnih pojava.</td>
                        <td><input type="radio" name="pitanje27" value="1"></input></td>
                        <td><input type="radio" name="pitanje27" value="2"></input></td>
                        <td><input type="radio" name="pitanje27" value="3"></input></td>
                        <td><input type="radio" name="pitanje27" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Interesuje me kako funkcionišu različiti aparati i uređaji.</td>
                        <td><input type="radio" name="pitanje28" value="1"></input></td>
                        <td><input type="radio" name="pitanje28" value="2"></input></td>
                        <td><input type="radio" name="pitanje28" value="3"></input></td>
                        <td><input type="radio" name="pitanje28" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Voljela bih prisustvovati simpozijumu.</td>
                        <td><input type="radio" name="pitanje29" value="1"></input></td>
                        <td><input type="radio" name="pitanje29" value="2"></input></td>
                        <td><input type="radio" name="pitanje29" value="3"></input></td>
                        <td><input type="radio" name="pitanje29" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Vrlo sam precizan/na i spretan/na.</td>
                        <td><input type="radio" name="pitanje30" value="1"></input></td>
                        <td><input type="radio" name="pitanje30" value="2"></input></td>
                        <td><input type="radio" name="pitanje30" value="3"></input></td>
                        <td><input type="radio" name="pitanje30" value="4"></input></td>
                    </tr>
                    <tr>
                        <td>Zainteresovan/na sam za strukturu građevinskih objekata.</td>
                        <td><input type="radio" name="pitanje31" value="1"></input></td>
                        <td><input type="radio" name="pitanje31" value="2"></input></td>
                        <td><input type="radio" name="pitanje31" value="3"></input></td>
                        <td><input type="radio" name="pitanje31" value="4"></input></td>
                    </tr>
                </table>
            </div>

            <div>
            <input class="btn" type="submit" value="Submit" onClick={() => {if (provjeriAnketu()) {window.location =  '/korisnik/'+localStorage.getItem('username')+'/testorijentacije/RezultatiTesta';}}}></input>
            </div>
        </div>
        <Footer/>   
        </>
    )
}
export default Test2