
//Milla Tuppurainen

// CHECKING THE ANSWERS   
    let amountOfAnsweredQuestions = 0;

    // Question 1, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck1() {
        document.getElementById("argument1").innerHTML = "";
        
        if (document.getElementById("flexRadioDefault1").checked) {
            document.getElementById("argument1").innerHTML += "Correct!" + "<br>" + "<br>";
        } else {
            document.getElementById("argument1").innerHTML += "Wrong." + "<br>" + "<br>";
            document.getElementById("question1Answer1").style.backgroundColor = "#AB9FCC";
        }
        
        document.getElementById("argument1").innerHTML += "Turn right = käänny oikealle" + "<br>" + "Follow the street to the end = seuraa tietä päähän saakka" + "<br>" + "Turn left = käänny vasemmalle";
        
        // Question 1, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        document.getElementById("answeredQuestions").innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        
        // Question 1, disabling radio buttons after choice
        document.getElementById("flexRadioDefault1").disabled = true;
        document.getElementById("flexRadioDefault2").disabled = true;
        document.getElementById("flexRadioDefault3").disabled = true;
        document.getElementById("flexRadioDefault4").disabled = true;
    }

    // Question 2, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck2() {
        
        document.getElementById("argument2").innerHTML = "";

        if (document.getElementById("flexRadioDefault6").checked) {
            document.getElementById("argument2").innerHTML += "Correct!" + "<br>" + "<br>";
        } else {
            document.getElementById("argument2").innerHTML += "Wrong." + "<br>" + "<br>";
            document.getElementById("question2Answer2").style.backgroundColor = "#AB9FCC";
        }
        
        document.getElementById("argument2").innerHTML += "April = Huhtikuu" + "<br>" + "May = Toukokuu" + "<br>" + "November = Marraskuu" + "<br>" + "July = Heinäkuu"; 
        
        // Question 2, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        document.getElementById("answeredQuestions").innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        
        // Question 2, disabling radio buttons after choice
        document.getElementById("flexRadioDefault5").disabled = true;
        document.getElementById("flexRadioDefault6").disabled = true;
        document.getElementById("flexRadioDefault7").disabled = true;
        document.getElementById("flexRadioDefault8").disabled = true;
    }

    // Question 3, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck3() {
        
        document.getElementById("argument3").innerHTML = "";

        if (document.getElementById("flexRadioDefault10").checked) {
            document.getElementById("argument3").innerHTML += "Correct!" + "<br>" + "<br>";
        } else {
            document.getElementById("argument3").innerHTML += "Wrong." + "<br>" + "<br>";
            document.getElementById("question3Answer2").style.backgroundColor = "#AB9FCC";
        }
        
        document.getElementById("argument3").innerHTML += "Mathematics = matikka" + "<br>" + "Environmental studies = ympäristötieto" + "<br>" + "History = historia" + "<br>" + "Biology = biologia" + "<br>" + "Art = kuvaamataito"; 
        
        // Question 3, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        document.getElementById("answeredQuestions").innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        
        // Question 3, disabling radio buttons after choice
        document.getElementById("flexRadioDefault9").disabled = true;
        document.getElementById("flexRadioDefault10").disabled = true;
        document.getElementById("flexRadioDefault11").disabled = true;
        document.getElementById("flexRadioDefault12").disabled = true;
    }

    // Question 4, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck4() {
        
        document.getElementById("argument4").innerHTML = "";

        if (document.getElementById("flexRadioDefault14").checked) {
            document.getElementById("argument4").innerHTML += "Correct!" + "<br>" + "<br>";
        } else {
            document.getElementById("argument4").innerHTML += "Wrong." + "<br>" + "<br>";
            document.getElementById("question4Answer2").style.backgroundColor = "#AB9FCC";
        }

        document.getElementById("argument4").innerHTML += "Between = välissä" + "<br>" + "Below = alapuolella" + "<br>" + "On top of = päällä" + "<br>" + "Next to = vieressä"; 
        
        // Question 4, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        document.getElementById("answeredQuestions").innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        
        // Question 4, disabling radio buttons after choice
        document.getElementById("flexRadioDefault13").disabled = true;
        document.getElementById("flexRadioDefault14").disabled = true;
        document.getElementById("flexRadioDefault15").disabled = true;
        document.getElementById("flexRadioDefault16").disabled = true;
    }

    // Question 5, checking if the answer was correct, telling which answer is correct and telling why it was correct/wrong.
    function answerCheck5() {
        
        document.getElementById("argument5").innerHTML = "";
        
        if (document.getElementById("flexRadioDefault20").checked) {
            document.getElementById("argument5").innerHTML += "Correct!" + "<br>" + "<br>";
        } else {
            document.getElementById("argument5").innerHTML += "Wrong." + "<br>" + "<br>";
            document.getElementById("question5Answer4").style.backgroundColor = "#AB9FCC";
        }
        
        document.getElementById("argument5").innerHTML += "Volleyball = lentopallo" + "<br>" + "Skiing = hiihto" + "<br>" + "Basketball = koripallo" + "<br>" + "Football = jalkapallo";
        
        // Question 5, telling the amount of answered questions
        amountOfAnsweredQuestions++;
        document.getElementById("answeredQuestions").innerHTML = "Olet vastannut " + amountOfAnsweredQuestions + "/5 kysymykseen.";
        
        // Question 5, disabling radio buttons after choice
        document.getElementById("flexRadioDefault17").disabled = true;
        document.getElementById("flexRadioDefault18").disabled = true;
        document.getElementById("flexRadioDefault19").disabled = true;
        document.getElementById("flexRadioDefault20").disabled = true;
    }

//POINTS
    
    // Question 1, points
    function checkPoint1() {
        let point1 = 0;

        if (document.getElementById("flexRadioDefault1").checked) {
            point1++;
        } else {
            point1;
        } return point1;
    }

    // Question 2, points
    function checkPoint2() {
        let point2 = 0;

        if (document.getElementById("flexRadioDefault6").checked) {
            point2++;
        } else {
            point2;
        } return point2;
    }

    // Question 3, points
    function checkPoint3() {
        let point3 = 0;

        if (document.getElementById("flexRadioDefault10").checked) {
            point3++;
        } else {
            point3;
        } return point3;
    }

    // Question 4, points
    function checkPoint4() {
        let point4 = 0;

        if (document.getElementById("flexRadioDefault14").checked) {
            point4++;
        } else {
            point4;
        } return point4;
    }

    // Question 5, points
    function checkPoint5() {
        let point5 = 0;
        if (document.getElementById("flexRadioDefault20").checked) {
            point5++;
        } else {
            point5;
        } return point5;
    }

    // Prizes
    let easterEgg1 = '<img src="englanti_Images/easter-egg-g9bd9a8554_1280.png" width=50%>';
    let easterEgg2 = '<img src="englanti_Images/easter-egg-g6858e1df2_1280.png" width=50%>';
    let treasureChest = '<img src="englanti_Images/image-from-rawpixel-id-6328559-jpeg.jpg" width=50%>';
 
    // Calculating and returning the points
    function checkPoints() {
        let points1 = checkPoint1();
        let points2 = checkPoint2();
        let points3 = checkPoint3();
        let points4 = checkPoint4();
        let points5 = checkPoint5();
        
        let pointsCount = points1 + points2 + points3 + points4 + points5;

        let pointScore = document.getElementById("results").innerHTML += "Sait " + pointsCount + "/5 pistettä." + "<br>" + "<br>";

        if (pointsCount < 2) {
            pointScore;
            document.getElementById("results").innerHTML += easterEgg1 + "<br>" + "Kannattaa vielä harjoitella lisää.";
        } else if (pointsCount < 5) {
            pointScore;
            document.getElementById("results").innerHTML += easterEgg1 + easterEgg2 + "<br>" + "Hyvä suoritus!";
        } else {
            pointScore;
            document.getElementById("results").innerHTML += treasureChest + "<br>" + "Onneksi olkoon!";
        } 

        document.getElementById("engbutton").disabled = true;
    } 

    

