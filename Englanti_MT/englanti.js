
// Milla Tuppurainen

// Correct answers
    let question1Answer1Radio = document.querySelector("#flexRadioDefault1");
    let question2Answer2Radio = document.querySelector("#flexRadioDefault6");
    let question3Answer2Radio = document.querySelector("#flexRadioDefault10");
    let question4Answer2Radio = document.querySelector("#flexRadioDefault14");
    let question5Answer4Radio = document.querySelector("#flexRadioDefault20");

// Amount of answered questions
    let amountOfAnsweredQuestions = 0;
    let answeredQuestions = document.querySelector("#answeredQuestions");

// CHECKING THE ANSWERS
    function answerCheck1() {
        let argument1 = document.querySelector("#argument1");

        argument1.innerHTML = "";
        
        if (question1Answer1Radio.checked) {
            argument1.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument1.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question1Answer1").style.backgroundColor = "#81F4E1";
        }
        
        argument1.innerHTML += "Turn right = käänny oikealle" + "<br>" + 
        "Follow the street to the end = seuraa tietä päähän saakka" + "<br>" + 
        "Turn left = käänny vasemmalle";
        argument1.style.visibility = "visible";

        // The amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Disabling radio buttons after choice
        question1Answer1Radio.disabled = true;
        document.querySelector("#flexRadioDefault2").disabled = true;
        document.querySelector("#flexRadioDefault3").disabled = true;
        document.querySelector("#flexRadioDefault4").disabled = true;
    }

    function answerCheck2() {
        let argument2 = document.querySelector("#argument2");

       argument2.innerHTML = "";

        if (question2Answer2Radio.checked) {
            argument2.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument2.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question2Answer2").style.backgroundColor = "#81F4E1";
        }

        argument2.innerHTML += "April = Huhtikuu" + "<br>" + "May = Toukokuu" + 
        "<br>" + "November = Marraskuu" + "<br>" + "July = Heinäkuu"; 
        argument2.style.visibility = "visible";

        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        document.querySelector("#flexRadioDefault5").disabled = true;
        question2Answer2Radio.disabled = true;
        document.querySelector("#flexRadioDefault7").disabled = true;
        document.querySelector("#flexRadioDefault8").disabled = true;
    }

    function answerCheck3() {
        let argument3 = document.querySelector("#argument3");

        question3Answer2Radio.innerHTML = "";

        if (question3Answer2Radio.checked) {
            argument3.innerHTML += "Vastasit oikein" + "<br>" + "<br>";
        } else {
            argument3.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question3Answer2").style.backgroundColor = "#81F4E1";
        }
        
        argument3.innerHTML += "Mathematics = matikka" + "<br>" + "Environmental studies = ympäristötieto" + 
        "<br>" + "History = historia" + "<br>" + "Biology = biologia" + "<br>" + "Art = kuvaamataito"; 
        argument3.style.visibility = "visible";

        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        document.getElementById("flexRadioDefault9").disabled = true;
        question3Answer2Radio.disabled = true;
        document.getElementById("flexRadioDefault11").disabled = true;
        document.getElementById("flexRadioDefault12").disabled = true;
    }

    function answerCheck4() {
        let argument4 = document.querySelector("#argument4");

        argument4.innerHTML = "";

        if (question4Answer2Radio.checked) {
            argument4.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument4.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question4Answer2").style.backgroundColor = "#81F4E1";
        }
        
        argument4.innerHTML += "Between = välissä" + "<br>" + "Below = alapuolella" + 
        "<br>" + "On top of = päällä" + "<br>" + "Next to = vieressä"; 
        argument4.style.visibility = "visible";

        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        document.getElementById("flexRadioDefault13").disabled = true;
        question4Answer2Radio.disabled = true;
        document.getElementById("flexRadioDefault15").disabled = true;
        document.getElementById("flexRadioDefault16").disabled = true;
    }

    function answerCheck5() {
        let argument5 = document.querySelector("#argument5");

        argument5.innerHTML = "";
        
        if (question5Answer4Radio.checked) {
            argument5.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument5.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question5Answer4").style.backgroundColor = "#81F4E1";
        }
        
        argument5.innerHTML += "Volleyball = lentopallo" + "<br>" + "Skiing = hiihto" + 
        "<br>" + "Basketball = koripallo" + "<br>" + "Football = jalkapallo";
        argument5.style.visibility = "visible";

        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        document.getElementById("flexRadioDefault17").disabled = true;
        document.getElementById("flexRadioDefault18").disabled = true;
        document.getElementById("flexRadioDefault19").disabled = true;
        question5Answer4Radio.disabled = true;
    }

    // Prizes
    let coins = '<img src="../Images/coins.png" width=50%>';
    let emerald = '<img src="../Images/emerald.png" width=50%>'; 
    let ruby = '<img src="../Images/ruby.png" width=50%>';
    let diamond = '<img src="../Images/diamond.png" width=50%>';
    let treasure = '<img src="../Images/chest.png" width=50%>';

    // Calculating and returning the points
    let point = 0;

    function checkPoints() {
        let point1 = checkPoint1(point);
        let point2 = checkPoint2(point);
        let point3 = checkPoint3(point);
        let point4 = checkPoint4(point);
        let point5 = checkPoint5(point);
        
        let pointsCount = point1 + point2 + point3 + point4 + point5;

        let resultsField = document.querySelector("#results");
        resultsField.innerHTML += "Sait " + pointsCount + "/5 pistettä." + "<br>";

        if (pointsCount == 1) {
            resultsField.innerHTML += coins + "<br>" + "Kannattaa vielä harjoitella lisää.";
        } else if (pointsCount == 2) {
            resultsField.innerHTML += emerald + "<br>" + "Ok suoritus, voisit kuitenkin vielä harjoitella.";
        } else if (pointsCount == 3) {
            resultsField.innerHTML += ruby + "<br>" + "Hyvä suoritus!";
        } else if (pointsCount == 4) {
            resultsField.innerHTML += diamond + "<br>" + "Hyvä suoritus!";
        } else if (pointsCount == 5) {
            resultsField.innerHTML += treasure + "<br>" + "Onneksi olkoon! Sait täydet pisteet.";
        } else {
            resultsField.innerHTML += "<br>" + "Kannattaa vielä harjoitella lisää.";
        }

        resultsField.style.visibility = "visible";
        document.getElementById("engbutton").disabled = true;
    } 

    function checkPoint1(point) {
        if (question1Answer1Radio.checked) {
            point++;
        } return point;
    }

    function checkPoint2(point) {
        if (question2Answer2Radio.checked) {
            point++;
        } return point;
    }

    function checkPoint3(point) {
        if (question3Answer2Radio.checked) {
            point++;
        } return point;
    }

    function checkPoint4(point) {
        if (question4Answer2Radio.checked) {
            point++;
        } return point;
    }

    function checkPoint5(point) {
        if (question5Answer4Radio.checked) {
            point++;
        } return point;
    }

    function checkBonus() {
        document.getElementById("bonusInput").innerHTML = "";
        document.getElementById("bonusresult").innerHTML = "";

        let input = document.getElementById("bonusInput").value;
        let bonusResult = document.getElementById("bonusresult");
        
        if (input == "Big Ben") {
            bonusResult.innerHTML = "Oikein! Kuvassa on Big Ben, Lontoon parlamenttitalon kellotorni.";
        } else {
            bonusResult.innerHTML = "Kuvassa on Big Ben, Lontoon parlamenttitalon kellotorni.";
        } 
    }
