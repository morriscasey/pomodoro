class EventManager{

  constructor(elementHooks){
    this._elementHooks = elementHooks;
    this._timeManager = new TimeManager();
    self = this;

  }

  get elementHooks(){
    return this._elementHooks;
  }

  get timeManager(){
    return this._timeManager;
  }

  start(){
    // Check is all required elements linked to html.
    self.elementHooks.check();
    // Find parent of DOM and attach an eventlistener.
    this._elementHooks.parentField.addEventListener("click", this.handleEvent, false);
    self.changeInfo();
  }

  changeInfo(){
    // Attach active timer to title field
    this._elementHooks.titleField.innerHTML = this._timeManager.activeTimer.name;
    self.updateDisplay(this._timeManager.activeTimer);
  }

  handleEvent(event){
    if(event.target !== event.currentTarget){
      var clickedItem = event.target.id;
      console.log("Clicked:"+ clickedItem);

    }
    event.stopPropagation();
    switch(clickedItem){

      case "lowerBreak":
        console.log("Decreased Break Time");
        self.elementHooks.breakField.innerHTML = self.padding(self.timeManager.breakTimer.decreaseValue());

        if(self.timeManager.activeTimer.name == "Break"){
          self.setButton("start");
          self.timeManager.activeTimer.pauseTimer();
          self.timeManager.activeTimer.resetSeconds();
          self.updateDisplay(self.timeManager.activeTimer);
        }
        break;

      case "raiseBreak":
        console.log("Increase Break Time");
        self.elementHooks.breakField.innerHTML = self.padding(self.timeManager.breakTimer.increaseValue());
        if(self.timeManager.activeTimer.name == "Break"){
          self.setButton("start");
          self.timeManager.activeTimer.pauseTimer();
          self.timeManager.activeTimer.resetSeconds();
          self.updateDisplay(self.timeManager.activeTimer);
        }
        break;
      case "lowerSession":
        console.log("Decreased Session Time");
        self.elementHooks.sessionField.innerHTML = self.padding(self.timeManager.sessionTimer.decreaseValue());

        if(self.timeManager.activeTimer.name == "Session"){
          self.setButton("start");
          self.timeManager.activeTimer.pauseTimer();
          self.timeManager.activeTimer.resetSeconds();
          self.updateDisplay(self.timeManager.activeTimer);
        }
        break;
      case "raiseSession":
        console.log("Increased Session Time");
        self.elementHooks.sessionField.innerHTML = self.padding(self.timeManager.sessionTimer.increaseValue());

        if(self.timeManager.activeTimer.name == "Session"){
          self.setButton("start");
          self.timeManager.activeTimer.pauseTimer();
          self.timeManager.activeTimer.resetSeconds();
          self.updateDisplay(self.timeManager.activeTimer);
        }
        break;
      case "start":
        console.log("Start Counter");

        self.setButton("pause");
        self.counter();
        break;

      case "pause":
        console.log("Pause");
        self.timeManager.activeTimer.pauseTimer();
        self.setButton("start");
        break;
      case "reset":
        console.log("Reset");
        self.timeManager.activeTimer.pauseTimer();
        self.timeManager.activeTimer.resetSeconds();

        if(self.timeManager.activeTimer.name == "Session"){
          self.timeManager.activeTimer.minutes = parseInt(self.elementHooks.sessionField.innerHTML);
        }else{
          // Method swaps out session timer for break timer and visa versa.
          self.timeManager.changeActiveTimer();

          self.changeInfo();
        }
        self.updateDisplay(self.timeManager.activeTimer);
        break;

    }
  }

  // Add zeros as padding for numbers less than 10.
  padding(value) {
      if(value < 10){
        return "0" + value;
      }else{
        return value;
      }
  }

  //*** TODO: Move mechanics to timeManager and figure out how to return display for elementHooks to update. ***

  // Runs set interval every second and counts down the minutes. Once minutes and seconds
  // reach zero than timer switches from sessions to break and back.
  counter(){
    self.timeManager.activeTimer.interval = setInterval(function(){
        if(self.timeManager.activeTimer.minutes == 0 && self.timeManager.activeTimer.seconds == 0){
          // Stops setInterval and changes the active timer interval to false.
          self.timeManager.activeTimer.pauseTimer();
          // Resets active timer seconds to 0
          self.timeManager.activeTimer.resetSeconds();
          // Condition resets the minutes for active timer back to the field selected.
          // Ex: if session is the active timer then sessionField's value determines what reset too.
          if(self.timeManager.activeTimer.name == "Session"){
            self.timeManager.activeTimer.minutes = parseInt(self.elementHooks.sessionField.innerHTML);
          }else{
            self.timeManager.activeTimer.minutes = parseInt(self.elementHooks.breakField.innerHTML);
          }

          // Method swaps out session timer for break timer and visa versa.
          self.timeManager.changeActiveTimer();

          // Changes the title and changes the display to match the timer changed too.
          self.changeInfo();
          // Starts the countdown process
          self.counter();

        } else if(self.timeManager.activeTimer.seconds == 0){
          self.timeManager.activeTimer.minutes -= 1;
          self.timeManager.activeTimer.seconds = 59;
        }else {
          self.timeManager.activeTimer.seconds -= 1;
        }

        self.updateDisplay(self.timeManager.activeTimer);
    }, 1000);
  }


  // Displays active timer
  updateDisplay(currentTimer){
    console.log("Name:"+ currentTimer.name + "Min:"+currentTimer.minutes+"Sec:"+currentTimer.seconds);

    self.elementHooks.minutesDisplayField.innerHTML = self.padding(currentTimer.minutes);
    self.elementHooks.secondsDisplayField.innerHTML = self.padding(currentTimer.seconds);
  }

  setButton(buttonId){
    self.elementHooks.timerButton.setAttribute("id", buttonId);
    self.elementHooks.timerButton.innerHTML = "Click to "+ buttonId.toUpperCase();
  }

}
