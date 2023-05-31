
function kikerdezett() {
    window.alert("Sajnos még mindig nem találjuk ki kérdezett")
}

    let kosar= []

    let kosarprice=0

    console.log("page loaded")
   let kosararak=[]

function Kosaradd(cucc) {
    console.log(cucc)
//ADATOK
    let toldi = {
        nev: "Toldi II",
        hivo: cucc,
        ar: 1263542999,
        kep: "img/Toldi2.png",
        kosarban: 0,

        torol: function () {
            kosar.shift(this)
            kosarprice-=ar
            KosarDispl()
        }
    }
    let neuf = {
        nev: "Neubaufahrzeug",
        hivo: cucc,
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
        hivo: cucc,
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
        hivo: cucc,
        ar: 99999,
        kep: "img/drip.jpg",
        kosarban: 0,
        torol: function () {
            kosar.shift(this)
            kosarprice-=this.ar
            KosarDispl()
        }
    }
    let csabi = {
        nev: "Csovács Kaba cossplay",
        hivo: cucc,
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
        hivo: cucc,
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
        hivo: cucc,
        ar: 4999,
        kep: "img/erettsegi.jpg",
        kosarban: 0,

        torol: function () {
            kosar.shift(this)
            kosarprice-=this.ar
            KosarDispl()
        }
    }
    let tanarno = {
        nev: "15 éves qgya",
        hivo: cucc,
        ar: 0,
        kep: "img/kutya.jpg",
        kosarban: 0,


        torol: function  () {
            kosar.shift(this)
            kosarprice-=this.ar
            KosarDispl()
        }

    }
    if (cucc == "toldi"){

        kosar.push(obj)
    }else
    if (cucc == "neuf"){
        l
        kosar.push(obj)

    }else
    if (cucc == "alekosz"){

        kosar.push(obj)
    }else
    if (cucc == "drip"){

        kosar.push(obj)
    }else
    if (cucc == "csabi"){

        kosar.push(obj)
    }else
    if (cucc == "kalap"){

        kosar.push(obj)
    }else
    if (cucc == "erettsegi"){

        kosar.push(obj)
        kosarprice+=obj.ar
    }else
    if (cucc == "tanarno"){

        kosar.push(obj)


    }else{
        window.alert("nem tudom mi történt help")
    }
    document.getElementById("cartcount").innerHTML=kosar.length
    kosarprice = (neuf.ar*neuf.kosarban)+(toldi.ar*toldi.kosarban)
        +(alekosz.ar*alekosz.kosarban)+(drip.ar*drip.kosarban)+
        (csabi.ar*csabi.kosarban)+(kalap.ar*kalap.kosarban)+
        (erettsegi.ar*erettsegi.kosarban)+

    document.getElementById("cartprice").innerHTML=kosarprice


KosarDispl()
}
function KosarDispl() {
    document.getElementById("lista").innerHTML=""
    console.log("frissult a lista")
    for (let i=0; i<kosar.length;i++) {
       let element=kosar[i]
    document.getElementById("lista").innerHTML+=

    }

}


