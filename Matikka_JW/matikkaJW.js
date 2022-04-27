/* Arvotaan tehtäviin random numerot */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* Tehtävä 1 */
let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);

number1 = getRndInteger(0, 100);
number2 = getRndInteger(0, 100);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

/* Tehtävä 2 */
let number3 = Number(document.getElementById("number3").value);
let number4 = Number(document.getElementById("number4").value);

number3 = getRndInteger(0, 100);
number4 = getRndInteger(0, 100);

document.getElementById("number3").innerHTML = number3;
document.getElementById("number4").innerHTML = number4;

/* Tehtävä 3 */
let number5 = Number(document.getElementById("number5").value);
let number6 = Number(document.getElementById("number6").value);

number5 = getRndInteger(0, 10);
number6 = getRndInteger(0, 10);

document.getElementById("number5").innerHTML = number5;
document.getElementById("number6").innerHTML = number6;

/* Tehtävä 4 */
let number7 = Number(document.getElementById("number7").value);
let number8 = Number(document.getElementById("number8").value);
let number9 = Number(document.getElementById("number9").value);

number7 = getRndInteger(0, 100);
number8 = getRndInteger(0, 100);
number9 = getRndInteger(0, 100);

document.getElementById("number7").innerHTML = number7;
document.getElementById("number8").innerHTML = number8;
document.getElementById("number9").innerHTML = number9;

/* Tehtävä 5 */
let number10 = Number(document.getElementById("number10").value);
let number11 = Number(document.getElementById("number11").value);
let number12 = Number(document.getElementById("number12").value);

number10 = getRndInteger(0, 100);
number11 = getRndInteger(0, 100);
number12 = getRndInteger(0, 100);

document.getElementById("number10").innerHTML = number10;
document.getElementById("number11").innerHTML = number11;
document.getElementById("number12").innerHTML = number12;


/**
 * Tehtävä 1 
 */
function calculate1() {

    let input = Number(document.getElementById("answer1").value);
    let correctAnswer = number1 + number2;

        if ( input != correctAnswer ) {
        
        }
}

/**
 * Tehtävä 2
 */
function calculate2() {

    let input = Number(document.getElementById("answer2").value);
    let correctAnswer = number1 + number2;
    
        if ( input != correctAnswer ) {
            
        }
}

/**
 * Tehtävä 3
 */
function calculate3() {

    let input = Number(document.getElementById("answer3").value);
    let correctAnswer = number1 + number2;
    
        if ( input != correctAnswer ) {
            
        }
}

/**
 * Tehtävä 4 
 */
function calculate4() {

    let input = Number(document.getElementById("answer4").value);
    let correctAnswer = number1 + number2;
    
        if ( input != correctAnswer ) {
            
        }
}

/**
 * Tehtävä 5
 */
function calculate5() {

    let input = Number(document.getElementById("answer5").value);
    let correctAnswer = number1 + number2;
    
        if ( input != correctAnswer ) {
            
        }
}

/**
 * Pisteiden lasku
 */
function rewards() {


}