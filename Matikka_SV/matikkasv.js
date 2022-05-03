//Random number generator haettu: https://www.w3schools.com/js/js_random.asp

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }