//Elementit joihin syötetään numerot, ja joista haetaan ne numerot listattuna. (eka, toka), (eka2, toka2) jne...
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
let taulukko = [v1, v11, v2, v22, v3, v33, v4, v44, v5, v55, v6, v66, v7];

//Random number generator funktio haettu: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function teeLaskut() {
    for(let i=0;i<taulukko.length;i++) {
        taulukko[i].innerText = getRndInteger(1,15);
        console.log(taulukko[i].innerText);
    } 
}


function tarkistaVastaukset() {
    let oikein = 0;
    let vaarin = 0;
    if(document.getElementById("vastaus").value==(Number(v1.innerText)+Number(v11.innerText))) {
        console.log("Oikein +");
        document.getElementById("vastaus").style.color = "green";
        oikein++; 
    } 
    if(document.getElementById("vastaus2").value==(Number(v2.innerText)-Number(v22.innerText))){
        console.log("Oikein +");
        document.getElementById("vastaus2").style.color = "green";
        oikein++; 
    } 
    if(document.getElementById("vastaus3").value==(Number(v3.innerText)/Number(v33.innerText))){
        console.log("Oikein +");
        document.getElementById("vastaus3").style.color = "green";
        oikein++; 
    } 
    if(document.getElementById("vastaus4").value==(Number(v4.innerText)*Number(v44.innerText))){
        console.log("Oikein +");
        document.getElementById("vastaus4").style.color = "green";
        oikein++; 
    } 
    if(document.getElementById("vastaus5").value==(Number(v5.innerText)+Number(v55.innerText))){
        console.log("Oikein +");
        document.getElementById("vastaus5").style.color = "green"; 
        oikein++;
    } 
    if(document.getElementById("vastaus6").value==Number(v6.innerText)+Number(v66.innerText)/Number(v7.innerText)){
        console.log("Oikein +");
        document.getElementById("vastaus6").style.color = "green";
        oikein++; 
    } else {
        vaarin++;
    }
    document.getElementById("vastaukset").innerText = "Oikein: " + oikein + "/6";
}

teeLaskut();
