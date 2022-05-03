//Haetaan 
let v1 = document.getElementById("eka");
let v11 = document.getElementById("toka");
let v2 = document.getElementById("eka2");
let v22 = document.getElementById("toka2");
let v3 = document.getElementById("eka3");
let v33 = document.getElementById("toka3");
let v4 = document.getElementById("eka4");
let v44 = document.getElementById("toka4");
let v5 = document.getElementById("eka5");
let v55 = document.getElementById("toka5");
let v6 = document.getElementById("eka6");
let v66 = document.getElementById("toka6");
let v7 = document.getElementById("toka7");

//Random number generator funktio haettu: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let numero1 = new Array();
let numero2 = new Array();
let numero3 = new Array(); 

function generoiNumerot() {
    for(let i=0;i<15;i++) {
        numero1.push(getRndInteger(1, 75));
        numero2.push(getRndInteger(1,10));
        numero3.push(getRndInteger(1,15));
    }
    console.log(numero1);
}

function teeLaskut() {
    // Tehtävä 1
    v1.innerText=(numero1[getRndInteger(0,15)]);
    v11.innerText=(numero1[getRndInteger(0,15)]);
    // Tehtävä 2
    v2.innerText=(numero1[getRndInteger(0,15)]);
    v22.innerText=(numero1[getRndInteger(0,15)]);
    // Tehtävä 3
    v3.innerText=(numero1[getRndInteger(0,15)]);
    v33.innerText=(numero2[getRndInteger(0,15)]);
    // Tehtävä 4
    v4.innerText=(numero3[getRndInteger(0,15)]);
    v44.innerText=(numero2[getRndInteger(0,15)]);
    // Tehtävä 5
    v5.innerText=(numero1[getRndInteger(0,15)]);
    v55.innerText=(numero1[getRndInteger(0,15)]);
    // Tehtävä 6
    v6.innerText=(numero1[getRndInteger(0,15)]);
    v66.innerText=(numero1[getRndInteger(0,15)]);
    v7.innerText=(numero2[getRndInteger(0,15)]);
}

function tarkistaVastaukset() {
    let oikeatVastaukset = 0;
    if(document.getElementById("vastaus").value==(Number(v1.innerText)+Number(v11.innerText))) {
        alert("Oikein!");
        oikeatVastaukset++;
    } else {
        alert("no can do");
    }
}

generoiNumerot();
teeLaskut();