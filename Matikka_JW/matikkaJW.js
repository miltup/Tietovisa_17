function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);

number1 = getRndInteger(0, 100);
number2 = getRndInteger(0, 100);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

function calculate1() {

let input = Number(document.getElementById("answer1").value);
let correctAnswer = number1 + number2;

    if ( input != correctAnswer ) {
        
    }
}