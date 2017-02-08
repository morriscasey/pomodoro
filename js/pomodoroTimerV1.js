var minutes = 0;
var seconds = 0;
var timer;
var isOn = false;

function counter(){
  if(isOn == false){
    timer = setInterval(function(){
        if(minutes == 0 && seconds == 0){
          clearTimeout(timer);
        } else if(seconds == 0){
          minutes -= 1;
          seconds = 59;
        }else {
          seconds -= 1;
        }
        updateDisplay();
    }, 1000);
  }
}

function init(){
  // Initialized default settings
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function pad(value) {
    if(value < 10){
      return "0" + value;
    }else{
      value;
    }
}

function updateDisplay(){
  timeDisplay.innerHTML = pad(minutes) + ":" + pad(seconds);
}

window.onload = function(){
  // Constants
  let lessMinutes = document.getElementById("lessMinutes");
  let moreMinutes = document.getElementById("moreMinutes");
  let timeDisplay = document.getElementById("timeDisplay");
  let clickStart = document.getElementById("start");
  let clickPause = document.getElementById("pause");
  let clickReset = document.getElementById("reset");

  let minuteField = document.getElementById("minuteField");

  var sessionLength = parseInt(minuteField.innerHTML);
  init();

  lessMinutes.addEventListener("click", function(){
    console.log("minus");
    // Stop countdown
    clearTimeout(timer);
    isOn = false;
    // Prevents minutes to go below 0
      if(sessionLength > 0){
        sessionLength -= 1;
        updateSessionLength();
        updateDisplay();

      }
  }, false);

  moreMinutes.addEventListener("click", function(){
    console.log("plus");
    // Stop countdown
    clearTimeout(timer);
    isOn = false;
        if(sessionLength <200){
          sessionLength += 1;
          updateSessionLength();
          updateDisplay();

        }
      });

  clickStart.addEventListener("click", function(){
    console.log("Start");
    counter();
    isOn = true;
  });

  clickPause.addEventListener("click", function(){
    clearTimeout(timer);
    isOn = false;
    console.log("Pause");
  });

  clickReset.addEventListener("click", function(){
    console.log("Reset");
    clearTimeout(timer);
    // Update minutes for countdown display
    minutes = sessionLength;
    // Reset seconds
    seconds = 0;
    updateDisplay();

    isOn = false;

  });

  function updateSessionLength(){
    // Update #minuteField with session length
    minuteField.innerHTML = pad(sessionLength);
    // Update minutes for countdown display
    minutes = sessionLength;
    // Reset seconds
    seconds = 0;
  }

}
