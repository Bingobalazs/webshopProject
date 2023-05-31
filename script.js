
function kikerdezett() {
    window.alert("Sajnos még mindig nem találjuk ki kérdezett")
}

    let kosar= []

    let kosarprice=0

    console.log("page loaded")
   let kosararak=[]
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
//akkor egy bohóc
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
function Kosaradd(cucc) {
    console.log(cucc)

    if (cucc == "toldi"){
        kosar.push(toldi)
        toldi.kosarban++

    }else
    if (cucc == "neuf"){
        l
        kosar.push(neuf)
        neuf.kosarban++


    }else
    if (cucc == "alekosz"){

        kosar.push(alekosz)
        alekosz.kosarban++
    }else
    if (cucc == "drip"){

        kosar.push(drip)
        drip.kosarban++
    }else
    if (cucc == "csabi"){

        kosar.push(csabi)
        csabi.kosarban++
    }else
    if (cucc == "kalap"){

        kosar.push(kalap)
        kalap.kosarban++
    }else
    if (cucc == "erettsegi"){

        kosar.push(erettsegi)
        erettsegi.kosarban++
    }else
    if (cucc == "tanarno"){

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


}
function ar(params) {

if (params == "toldi") cucc = toldi
else if (params == "neuf") cucc= neuf
else if (params == "alekosz") cucc= alekosz
else if (params == "drip") cucc= drip
else if (params == "csabi") cucc= csabi
else if (params == "kalap") cucc= kalap
else if (params == "erettsegi") cucc= erettsegi
else if (params == "tanarno") cucc= tanarno

document.getElementById(params+"ar").innerHTML= (cucc.ar*cucc.kosarban)+" Ft"

}


