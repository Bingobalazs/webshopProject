
function kikerdezett() {
    window.alert("Sajnos még mindig nem találjuk ki kérdezett")
}

    let kosar= []

    let kosarprice=0

    console.log("page loaded")
   let kosararak=[]
   let szallitasar = 0
   let plusz = false
//ADATOK
//TOLDI MIKLÓS KATONÁJA VAGYOK LEGSZEBB KATONÁÁÁÁJA
let toldi = {
    nev: "Toldi II",

    ar: 1263542999,
    kep: "img/Toldi2.png",
    kosarban: 0,
    /*a torol függvény nem csinál amúgy semmit,
        de régen úgy volt hogy csinálni fog.
        Csak aztán túlságosan is csinálta és
        kitörölte magát mielőtt létrejött volna*/
    torol: function () {
        kosar.shift(this)
        kosarprice-=ar
        KosarDispl()
    }
}
/*nem tudom miért hivatkozok a náci tankra "neuf"-ként,
mikor nem is így hívják*/
let neuf = {
    nev: "Neubaufahrzeug",

    ar: 3452283999,
    kep: "img/neuf.png",
    kosarban: 0,
    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
let alekosz = {
    nev: "Mercedes-Benz S 320 CDI, 2006",

    ar: 19726999,
    kep: "img/mercedesz.jpg",
    kosarban: 0,
    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
let drip = {
    nev: "Teljes outfit",

    ar: 99999,
    kep: "img/drip.jpg",
    kosarban: 0,
    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
//akkora egy bohóc
let csabi = {
    nev: "Csovács Kaba cossplay",

    ar: 299,
    kep: "img/csabi.jpg",
    kosarban: 0,

    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
let kalap = {
    nev: "Nemzeti szalmakalap",

    ar: 2435999,
    kep: "img/kalap.png",
    kosarban: 0,

    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
let erettsegi = {
    nev: "Érettségi Bizonyítvány (nem lopott)",

    ar: 4999,
    kep: "img/erettsegi.jpg",
    kosarban: 0,

    torol: function () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }
}
/*Azt hogy a 15 éves kutya miért tanárnőként van a rendszerben,
inkább fedje homály*/
/* --- Utánnanéztem hogy kell írni a fedje szólt,
 ha mégis látná a kutyus,
legalább ebbe ne kössön bele*/
let tanarno = {
    nev: "15 éves qgya",

    ar: 0,
    kep: "img/kutya.jpg",
    kosarban: 0,


    torol: function  () {
        kosar.shift(this)
        kosarprice-=this.ar
        KosarDispl()
    }

}










//Ez az előbb még működött. Most elvileg nem is létezik
//Működik, szerintem a kosar listának már semmi értelme, viszont félek ha törlöm valami nem fog működni
function Kosaradd(cucc) {
    console.log(cucc)

    if (cucc === "toldi"){
        kosar.push(toldi)
        toldi.kosarban++

    }else
    if (cucc === "neuf"){

        kosar.push(neuf)
        neuf.kosarban++


    }else
    if (cucc === "alekosz"){

        kosar.push(alekosz)
        alekosz.kosarban++
    }else
    if (cucc === "drip"){

        kosar.push(drip)
        drip.kosarban++
    }else
    if (cucc === "csabi"){

        kosar.push(csabi)
        csabi.kosarban++
    }else
    if (cucc === "kalap"){

        kosar.push(kalap)
        kalap.kosarban++
    }else
    if (cucc === "erettsegi"){

        kosar.push(erettsegi)
        erettsegi.kosarban++
    }else
    if (cucc === "tanarno"){

        kosar.push(tanarno)
        tanarno.kosarban++



    }else{
        window.alert("nem tudom mi történt help")
    }
    /* HA a kosárban nincsen cuccos muccos akkor,
     Tompetinek nem kell elénekelnie a számos dalt*/
    if(kosar.length>0) document.getElementById("cartcount").innerHTML=kosar.length
    else document.getElementById("cartcount").innerHTML=""

    /*Kiszámolja a kosár tartalmának tartalmazó termékek hez tartozó árat,
    megszorozza a árt a mennyiséggel amit a kosár tartalma tartalmaz
    */
    kosarprice = (neuf.ar*neuf.kosarban)+(toldi.ar*toldi.kosarban)
        +(alekosz.ar*alekosz.kosarban)+(drip.ar*drip.kosarban)+
        (csabi.ar*csabi.kosarban)+(kalap.ar*kalap.kosarban)+
        (erettsegi.ar*erettsegi.kosarban)+(tanarno.ar*tanarno.kosarban)
    /* na nem mintha az ingyenes item számítani,
    de az Epic Games is küld számlát a Fortnite-ról ha letöltjük
     */



document.getElementById("cartprice").innerHTML=kosarprice


ar(cucc)
KosarDispl()

}
function KosarDispl() {



        //Megjeleníti a kosárban lévő dolgokat
        if (toldi.kosarban > 0)     document.getElementById("toldi").style = "display: flex;"
        if (neuf.kosarban > 0)      document.getElementById("neuf").style = "display: flex;"
        if (alekosz.kosarban > 0)   document.getElementById("alekosz").style = "display: flex;"
        if (drip.kosarban > 0)      document.getElementById("drip").style = "display: flex;"
        if (csabi.kosarban > 0)     document.getElementById("csabi").style = "display: flex;"
        if (kalap.kosarban > 0)     document.getElementById("kalap").style = "display: flex;"
        if (erettsegi.kosarban > 0) document.getElementById("erettsegi").style = "display: flex;"
        if (tanarno.kosarban > 0)   document.getElementById("tanarno").style = "display: flex;"

        //nem jeleníti meg azt ami nincs a kosárban (kell, mert ha törlünk valamit el kell tűntetni)
        if (toldi.kosarban == 0) document.getElementById("toldi").style = "display: none;"
        
        if (neuf.kosarban == 0) document.getElementById("neuf").style = "display: none;"
        if (alekosz.kosarban == 0) document.getElementById("alekosz").style = "display: none;"
        if (drip.kosarban == 0) document.getElementById("drip").style = "display: none;"
        if (csabi.kosarban == 0) document.getElementById("csabi").style = "display: none;"
        if (kalap.kosarban == 0) document.getElementById("kalap").style = "display: none;"
        if (erettsegi.kosarban == 0) document.getElementById("erettsegi").style = "display: none;"
        if (tanarno.kosarban == 0) document.getElementById("tanarno").style = "display: none;"
        

    //beállítja a number típusú input mezőket az adott dolgok kosárban lévő számával
    document.getElementById("toldimenny").value = toldi.kosarban
    
    document.getElementById("neufmenny").value = neuf.kosarban
    document.getElementById("alekoszmenny").value = alekosz.kosarban
    document.getElementById("dripmenny").value = drip.kosarban
    document.getElementById("csabimenny").value = csabi.kosarban
    document.getElementById("kalapmenny").value = kalap.kosarban
    document.getElementById("erettsegimenny").value = erettsegi.kosarban
    document.getElementById("tanarnomenny").value = tanarno.kosarban
    document.getElementById("osszegzesar").value= kosarprice
    

    /* HA a kosárban nincsen cuccos muccos akkor,
    Tompetinek nem kell elénekelnie a számos dalt*/
    if(kosar.length>0) document.getElementById("cartcount").innerHTML=kosar.length
    else document.getElementById("cartcount").innerHTML=""

    /*Kiszámolja a kosár tartalmának tartalmazó termékek hez tartozó árat,
    megszorozza a árt a mennyiséggel amit a kosár tartalma tartalmaz
    */
    kosarprice = (neuf.ar*neuf.kosarban)+(toldi.ar*toldi.kosarban)
        +(alekosz.ar*alekosz.kosarban)+(drip.ar*drip.kosarban)+
        (csabi.ar*csabi.kosarban)+(kalap.ar*kalap.kosarban)+
        (erettsegi.ar*erettsegi.kosarban)+(tanarno.ar*tanarno.kosarban)

    osszegar = kosarprice+Szallitas()+Fizetype()
    /* na nem mintha az ingyenes item számítani,
    de az Epic Games is küld számlát a Fortnite-ról ha letöltjük
     */
    toldi.kosarban      = parseInt(document.getElementById("toldimenny").value)

    neuf.kosarban       = parseInt(document.getElementById("neufmenny").value)
    alekosz.kosarban    = parseInt(document.getElementById("alekoszmenny").value)
    drip.kosarban       = parseInt(document.getElementById("dripmenny").value)
    csabi.kosarban      = parseInt(document.getElementById("csabimenny").value)
    kalap.kosarban      = parseInt(document.getElementById("kalapmenny").value)
    erettsegi.kosarban  = parseInt(document.getElementById("erettsegimenny").value)
    tanarno.kosarban    = parseInt(document.getElementById("tanarnomenny").value)

    document.getElementById("osszegzesar").innerHTML= osszegar.toLocaleString()+" Ft"
    document.getElementById("reszosszeg").innerHTML= kosarprice.toLocaleString()+" Ft"
    document.getElementById("rendelesresz").innerHTML= kosarprice.toLocaleString()+" Ft"
    document.getElementById("rendelesar").innerHTML= osszegar.toLocaleString()+" Ft"



    document.getElementById("cartprice").innerHTML=kosarprice.toLocaleString()
    if(kosar.length>0) document.getElementById("cartcount").innerHTML=neuf.kosarban+toldi.kosarban+alekosz.kosarban+drip.kosarban+csabi.kosarban+kalap.kosarban+erettsegi.kosarban+tanarno.kosarban
    else document.getElementById("cartcount").innerHTML=""

    ar(toldi)
    ar(neuf)
    ar(alekosz)
    ar(drip)
    ar(csabi)
    ar(kalap)
    ar(erettsegi)
    ar(tanarno)
    


}
function Updatemennyiseg() {
    toldi.kosarban      = parseInt(document.getElementById("toldimenny").value)

    neuf.kosarban       = parseInt(document.getElementById("neufmenny").value)
    alekosz.kosarban    = parseInt(document.getElementById("alekoszmenny").value)
    drip.kosarban       = parseInt(document.getElementById("dripmenny").value)
    csabi.kosarban      = parseInt(document.getElementById("csabimenny").value)
    kalap.kosarban      = parseInt(document.getElementById("kalapmenny").value)
    erettsegi.kosarban  = parseInt(document.getElementById("erettsegimenny").value)
    tanarno.kosarban    = parseInt(document.getElementById("tanarnomenny").value)
    KosarDispl()
    


 
    ar(toldi)
    ar(neuf)
    ar(alekosz)
    ar(drip)
    ar(csabi)
    ar(kalap)
    ar(erettsegi)
    ar(tanarno)
    
}

//A FIZETÉS ÉS A SZÁLLÍTÁS UTÁNNI PLUSZ KÖLTSÉGEK
function Szallitas() {
    if (kosarprice>20000) {
        
        return 0
        
    } else {
        
        
        return 1499
    }
}
function Fizetype() {
    if (plusz) {
        return 1499
    } else {
        return 0
    }
}
function szallitasiadat() {
    if (document.getElementById("szall").checked)document.getElementById("szallitasi").style="display: none"
    else document.getElementById("szallitasi").style="display: block"
}


function ar(params) {
/*
if (params == "toldi") cucc = toldi
else if (params == "neuf") cucc= neuf
else if (params == "alekosz") cucc= alekosz
else if (params == "drip") cucc= drip
else if (params == "csabi") cucc= csabi
else if (params == "kalap") cucc= kalap
else if (params == "erettsegi") cucc= erettsegi
else if (params == "tanarno") cucc= tanarno

document.getElementById(params+"ar").innerHTML= (cucc.ar*cucc.kosarban)+" Ft"
*/
    console.log(params+"ar")

    document.getElementById("toldiar").innerHTML =      (toldi.kosarban*toldi.ar).toLocaleString()+" Ft"
    document.getElementById("neufar").innerHTML =       (neuf.kosarban*neuf.ar).toLocaleString()+" Ft"
    document.getElementById("alekoszar").innerHTML =    (alekosz.kosarban*alekosz.ar).toLocaleString()+" Ft"
    document.getElementById("dripar").innerHTML =       (drip.kosarban*drip.ar).toLocaleString()+" Ft"
    document.getElementById("csabiar").innerHTML =      (csabi.kosarban*csabi.ar).toLocaleString()+" Ft"
    document.getElementById("kalapar").innerHTML =      (kalap.kosarban*kalap.ar).toLocaleString()+" Ft"
    document.getElementById("erettsegiar").innerHTML =  (erettsegi.kosarban*erettsegi.ar).toLocaleString()+" Ft"
    document.getElementById("tanarnoar").innerHTML =    (tanarno.kosarban*tanarno.ar).toLocaleString()+" Ft"
    
}

function Kosarvesz(cucc, mennyiseg) {
    console.log(cucc)

    if (cucc === "toldi"){
        kosar.shift(toldi)
        toldi.kosarban=mennyiseg

    }else
    if (cucc === "neuf"){

        kosar.shift(neuf)
        neuf.kosarban=mennyiseg


    }else
    if (cucc === "alekosz"){

        kosar.shift(alekosz)
        alekosz.kosarban=mennyiseg
    }else
    if (cucc === "drip"){

        kosar.shift(drip)
        drip.kosarban=mennyiseg
    }else
    if (cucc === "csabi"){

        kosar.shift(csabi)
        csabi.kosarban=mennyiseg
    }else
    if (cucc === "kalap"){

        kosar.shift(kalap)
        kalap.kosarban=mennyiseg
    }else
    if (cucc === "erettsegi"){

        kosar.shift(erettsegi)
        erettsegi.kosarban=mennyiseg
    }else
    if (cucc === "tanarno"){

        kosar.shift(tanarno)
        tanarno.kosarban=mennyiseg



    }else{
        window.alert("nem tudom mi történt help")
    }
    ar(cucc)
    KosarDispl()
}












//NAVIGÁCIÓS FÜGGVÉNYEK
function KosarhozVisz() {
    console.log("visz")
    document.getElementById("shop").style="display: none!important;"
    document.getElementById("kosar").style="display: block!important;"
    document.getElementById("rendeles").style="display: none!important;"
    KosarDispl()
}
function ShophozVisz() {
    console.log("visz")
    document.getElementById("kosar").style="display: none!important;"
    document.getElementById("shop").style="display: block!important;"
    document.getElementById("rendeles").style="display: none!important;"
    KosarDispl()
}
function Rendeles() {
    console.log("visz")
    document.getElementById("kosar").style="display: none!important;"
    document.getElementById("shop").style="display: none!important;"
    document.getElementById("rendeles").style="display: block!important;"
    KosarDispl()
}
