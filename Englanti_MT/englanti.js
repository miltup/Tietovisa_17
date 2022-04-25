
//Milla Tuppurainen

// VARIABLES
    let question1Answer1Radio = document.querySelector("#flexRadioDefault1");
    let question2Answer2Radio = document.querySelector("#flexRadioDefault6");
    let question3Answer2Radio = document.querySelector("#flexRadioDefault10");
    let question4Answer2Radio = document.querySelector("#flexRadioDefault14");
    let question5Answer4Radio = document.querySelector("#flexRadioDefault20");

    let amountOfAnsweredQuestions = 0;
    let answeredQuestions = document.querySelector("#answeredQuestions");

// CHECKING THE ANSWERS
    // Question 1, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck1() {
        let argument1 = document.querySelector("#argument1");

        argument1.innerHTML = "";
        
        if (question1Answer1Radio.checked) {
            argument1.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument1.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question1Answer1").style.backgroundColor = "#AB9FCC";
        }
        
        argument1.innerHTML += "Turn right = käänny oikealle" + "<br>" + "Follow the street to the end = seuraa tietä päähän saakka" + "<br>" + "Turn left = käänny vasemmalle";
        argument1.style.visibility = "visible";

        // Question 1, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Question 1, disabling radio buttons after choice
        question1Answer1Radio.disabled = true;
        document.querySelector("#flexRadioDefault2").disabled = true;
        document.querySelector("#flexRadioDefault3").disabled = true;
        document.querySelector("#flexRadioDefault4").disabled = true;
    }

    // Question 2, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck2() {
        let argument2 = document.querySelector("#argument2");

       argument2.innerHTML = "";

        if (question2Answer2Radio.checked) {
            argument2.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument2.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question2Answer2").style.backgroundColor = "#AB9FCC";
        }

        argument2.innerHTML += "April = Huhtikuu" + "<br>" + "May = Toukokuu" + "<br>" + "November = Marraskuu" + "<br>" + "July = Heinäkuu"; 
        argument2.style.visibility = "visible";

        // Question 2, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Question 2, disabling radio buttons after choice
        document.querySelector("#flexRadioDefault5").disabled = true;
        question2Answer2Radio.disabled = true;
        document.querySelector("#flexRadioDefault7").disabled = true;
        document.querySelector("#flexRadioDefault8").disabled = true;
    }

    // Question 3, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck3() {
        let argument3 = document.querySelector("#argument3");

        question3Answer2Radio.innerHTML = "";

        if (question3Answer2Radio.checked) {
            argument3.innerHTML += "Vastasit oikein" + "<br>" + "<br>";
        } else {
            argument3.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question3Answer2").style.backgroundColor = "#AB9FCC";
        }
        
        argument3.innerHTML += "Mathematics = matikka" + "<br>" + "Environmental studies = ympäristötieto" + "<br>" + "History = historia" + "<br>" + "Biology = biologia" + "<br>" + "Art = kuvaamataito"; 
        argument3.style.visibility = "visible";

        // Question 3, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Question 3, disabling radio buttons after choice
        document.getElementById("flexRadioDefault9").disabled = true;
        question3Answer2Radio.disabled = true;
        document.getElementById("flexRadioDefault11").disabled = true;
        document.getElementById("flexRadioDefault12").disabled = true;
    }

    // Question 4, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck4() {
        let argument4 = document.querySelector("#argument4");

        argument4.innerHTML = "";

        if (question4Answer2Radio.checked) {
            argument4.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument4.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question4Answer2").style.backgroundColor = "#AB9FCC";
        }
        
        argument4.innerHTML += "Between = välissä" + "<br>" + "Below = alapuolella" + "<br>" + "On top of = päällä" + "<br>" + "Next to = vieressä"; 
        argument4.style.visibility = "visible";

        // Question 4, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Question 4, disabling radio buttons after choice
        document.getElementById("flexRadioDefault13").disabled = true;
        question4Answer2Radio.disabled = true;
        document.getElementById("flexRadioDefault15").disabled = true;
        document.getElementById("flexRadioDefault16").disabled = true;
    }

    // Question 5, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck5() {
        let argument5 = document.querySelector("#argument5");

        argument5.innerHTML = "";
        
        if (question5Answer4Radio.checked) {
            argument5.innerHTML += "Vastasit oikein!" + "<br>" + "<br>";
        } else {
            argument5.innerHTML += "Vastasit väärin." + "<br>" + "<br>";
            document.getElementById("question5Answer4").style.backgroundColor = "#AB9FCC";
        }
        
        argument5.innerHTML += "Volleyball = lentopallo" + "<br>" + "Skiing = hiihto" + "<br>" + "Basketball = koripallo" + "<br>" + "Football = jalkapallo";
        argument5.style.visibility = "visible";

        // Question 5, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        answeredQuestions.innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        answeredQuestions.style.visibility = "visible";

        // Question 5, disabling radio buttons after choice
        document.getElementById("flexRadioDefault17").disabled = true;
        document.getElementById("flexRadioDefault18").disabled = true;
        document.getElementById("flexRadioDefault19").disabled = true;
        question5Answer4Radio.disabled = true;
    }

//POINTS

    // Prizes
    let easterEgg1 = '<img src="englanti_Images/easter-egg-g9bd9a8554_1280.png" width=50%>';
    let easterEgg2 = '<img src="englanti_Images/easter-egg-g6858e1df2_1280.png" width=50%>';
    let treasureChest = '<img src="englanti_Images/image-from-rawpixel-id-6328559-jpeg.jpg" width=50%>';

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

        if (pointsCount < 2) {
            resultsField.innerHTML += easterEgg1 + "<br>" + "Kannattaa vielä harjoitella lisää.";
        } else if (pointsCount < 5) {
            resultsField.innerHTML += easterEgg1 + easterEgg2 + "<br>" + "Hyvä suoritus!";
        } else {
            resultsField.innerHTML += treasureChest + "<br>" + "Onneksi olkoon!";
        } 

        resultsField.style.visibility = "visible";
        document.getElementById("engbutton").disabled = true;
    } 

    // Question 1, points
    function checkPoint1(point) {
        if (question1Answer1Radio.checked) {
            point++;
        } return point;
    }

    // Question 2, points
    function checkPoint2(point) {
        if (question2Answer2Radio.checked) {
            point++;
        } return point;
    }

    // Question 3, points
    function checkPoint3(point) {
        if (question3Answer2Radio.checked) {
            point++;
        } return point;
    }

    // Question 4, points
    function checkPoint4(point) {
        if (question4Answer2Radio.checked) {
            point++;
        } return point;
    }

    // Question 5, points
    function checkPoint5(point) {
        if (question5Answer4Radio.checked) {
            point++;
        } return point;
    }

    //Bonus question
    
