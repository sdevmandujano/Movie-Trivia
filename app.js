//window.posGlobal=0;

function start() {
  var rightAnswers = ["c","c","a","c","b","b"];
  var userInput;
  var strTemp;
  var positiveScore = 0;
  //alert(document.getElementById("myform").elements)
  for (var i = 1; i <= rightAnswers.length; i++) {
    strTemp = "q" + String(i); // concatenation for get the element in the following object
    // strTemp gives q1, q2, q3, depending in the i iteration
    userInput = document.getElementById("myform").elements[strTemp]; // get the elements of the form
    // with the name of q1, q2, etc...
    //alert(userInput.value); // userInput.value, value gives the value of the value field
    if (userInput.value == rightAnswers[i-1]) {
      positiveScore++;
    }
  }
  return positiveScore;
}

function displayScore(pos) {
  alert(pos);
  $("#r").html("Target  " + pos);
}



    function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var pos;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          pos = start();
          window.posGlobal = pos;
          window.location.href = "end.html";
          displayScore(pos);
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
      $("#r").html("Target  " + window.posGlobal);
};












