/* Arvotaan tehtäviin random numerot */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* Taulukko, johon pisteet kerätään */
let points = [];

/* Tehtävä 1 */
let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);

number1 = getRndInteger(0, 50);
number2 = getRndInteger(0, 50);

document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

 function calculate1() {
    document.getElementById("answer1").disabled = true;
    document.getElementById("falseAnswer1").innerHTML = "";
    document.getElementById("correctAnswer1").innerHTML = "";

    let input = Number(document.getElementById("answer1").value);
    let correctAnswer = number1 + number2;

        if ( input != correctAnswer ) {
            document.getElementById("falseAnswer1").innerHTML = "Vastaus on väärin. Oikea vastaus on: " + correctAnswer;
        } else {
            document.getElementById("correctAnswer1").innerHTML = "Oikein!";
            points.push(1);
        }
}

/* Tehtävä 2 */
let number3 = Number(document.getElementById("number3").value);
let number4 = Number(document.getElementById("number4").value);

number3 = getRndInteger(50, 100);
number4 = getRndInteger(0, 50);

document.getElementById("number3").innerHTML = number3;
document.getElementById("number4").innerHTML = number4;

 function calculate2() {
    document.getElementById("answer2").disabled = true;
    document.getElementById("falseAnswer2").innerHTML = "";
    document.getElementById("correctAnswer2").innerHTML = "";

    let input = Number(document.getElementById("answer2").value);
    let correctAnswer = number3 - number4;

        if ( input != correctAnswer ) {
            document.getElementById("falseAnswer2").innerHTML = "Vastaus on väärin. Oikea vastaus on: " + correctAnswer;
        } else {
            document.getElementById("correctAnswer2").innerHTML = "Oikein!";
            points.push(1);
        }
}

/* Tehtävä 3 */
let number5 = Number(document.getElementById("number5").value);
let number6 = Number(document.getElementById("number6").value);

number5 = getRndInteger(0, 10);
number6 = getRndInteger(0, 10);

document.getElementById("number5").innerHTML = number5;
document.getElementById("number6").innerHTML = number6;

 function calculate3() {
    document.getElementById("answer3").disabled = true;
    document.getElementById("falseAnswer3").innerHTML = "";
    document.getElementById("correctAnswer3").innerHTML = "";

    let input = Number(document.getElementById("answer3").value);
    let correctAnswer = number5 * number6;

        if ( input != correctAnswer ) {
            document.getElementById("falseAnswer3").innerHTML = "Vastaus on väärin. Oikea vastaus on: " + correctAnswer;
        } else {
            document.getElementById("correctAnswer3").innerHTML = "Oikein!";
            points.push(1);
        }
}

/* Tehtävä 4 */
let number7 = Number(document.getElementById("number7").value);
let number8 = Number(document.getElementById("number8").value);
let number9 = Number(document.getElementById("number9").value);

number7 = getRndInteger(0, 50);
number8 = getRndInteger(0, 50);
number9 = getRndInteger(0, 50);

document.getElementById("number7").innerHTML = number7;
document.getElementById("number8").innerHTML = number8;
document.getElementById("number9").innerHTML = number9;

 function calculate4() {
    document.getElementById("answer4").disabled = true;
    document.getElementById("falseAnswer4").innerHTML = "";
    document.getElementById("correctAnswer4").innerHTML = "";

    let input = Number(document.getElementById("answer4").value);
    let correctAnswer = number7 + number8 + number9;

        if ( input != correctAnswer ) {
            document.getElementById("falseAnswer4").innerHTML = "Vastaus on väärin. Oikea vastaus on: " + correctAnswer;
        } else {
            document.getElementById("correctAnswer4").innerHTML = "Oikein!";
            points.push(1);
        }
}

/* Tehtävä 5 */
let number10 = Number(document.getElementById("number10").value);
let number11 = Number(document.getElementById("number11").value);
let number12 = Number(document.getElementById("number12").value);

number10 = getRndInteger(0, 100);
number11 = getRndInteger(0, 100);
number12 = getRndInteger(0, 50);

document.getElementById("number10").innerHTML = number10;
document.getElementById("number11").innerHTML = number11;
document.getElementById("number12").innerHTML = number12;

function calculate5() {

    document.getElementById("answer5").disabled = true;
    document.getElementById("falseAnswer5").innerHTML = "";
    document.getElementById("correctAnswer5").innerHTML = "";

    let input = Number(document.getElementById("answer5").value);
    let correctAnswer = number10 + number11 - number12;

        if ( input != correctAnswer ) {
            document.getElementById("falseAnswer5").innerHTML = "Vastaus on väärin. Oikea vastaus on: " + correctAnswer;
        } else {
            document.getElementById("correctAnswer5").innerHTML = "Oikein!";
            points.push(1);
        }
}

/**
 * Pisteiden lasku
 */
function rewards() {


    if (points.length < 1) {
        document.getElementById("points").innerHTML = "Et saanut yhtään pistettä. Yritä uudelleen.";
    } else if (points.length < 2) {
        document.getElementById("points").innerHTML = "Sait yhden pisteen!";
        document.getElementById("rewards").innerHTML = '<img src="../Images/coins.png">';
        document.getElementById("linkOfPicture").style.display = "block";
    } else if (points.length < 3) {
        document.getElementById("points").innerHTML = "Sait kaksi pistettä!";
        document.getElementById("rewards").innerHTML = '<img src="../Images/emerald.png">';
        document.getElementById("linkOfPicture").style.display = "block";
    } else if (points.length < 4) {
        document.getElementById("points").innerHTML = "Sait kolme pistettä!";
        document.getElementById("rewards").innerHTML = '<img src="../Images/ruby.png">';
        document.getElementById("linkOfPicture").style.display = "block";
    } else if (points.length < 5) {
        document.getElementById("points").innerHTML = "Sait neljä pistettä!";
        document.getElementById("rewards").innerHTML = '<img src="../Images/diamond.png">';
        document.getElementById("linkOfPicture").style.display = "block";
    } else {
        document.getElementById("points").innerHTML = "Sait kaikki oikein!";
        document.getElementById("rewards").innerHTML = '<img src="../Images/chest.png">';
        document.getElementById("linkOfPicture").style.display = "block";
    }
}