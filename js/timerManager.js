class TimerManager{
  constructor(timerType){
    this.timerType = timerType;
    this.isOn = false;
    this.timer;

    self = this;
  }
  // Retrieves element based on id assigned and updated timer.
  display(id){
    document.getElementById(id).innerHTML = this.timerType.display();
  }

  // Used to add extra 0 to numbers less than 10
  pad(value){
    return this.timerType.pad(value);
  }

  // Starts the countdown sequence. Requires the id used to update display on webpage.
  start(idForDisplay){
    if(self.isOn == false){
      console.log(self.timerType.display());
      var displays = self.timerType.display();
      this.timer = setInterval(function(){
        if(self.timerType.minutes === 0 && self.timerType.seconds == 0){
          clearTimeout(this.timer);
        } else if(self.timerType.seconds == 0){
          self.timerType.minutes -= 1;
          self.timerType.seconds = 59;
        }else {
          self.timerType.seconds -= 1;
        }
        // Cast id to String to be passed into display which requires a string.
        var stringId = String(idForDisplay);
        self.display(stringId);

      }, 1000);

      this.isOn = true;
    }
  }

  stop(){
    clearTimeout(this.timer);
    this.isOn = false;
  }

  reset(minuteToReset){
    this.stop();
    // Update minutes for countdown display
    this.timerType.minutes = minuteToReset;
    // Reset seconds
    this.timerType.seconds = 0;
  }

  increaseSessionTime(idForAddingMinutes){
    // Check and update
    var changedMinutes = this.incrementUp();
    // Changes session field to increased value.
    this.reset(changedMinutes);
    document.getElementById(idForAddingMinutes).innerHTML = changedMinutes;

  }

  decreaseSessionTime(idForRemovingMinutes){
    var changedMinutes = this.decrementDown();
    this.reset(changedMinutes);
    document.getElementById(idForRemovingMinutes).innerHTML = changedMinutes;
  }
  // Halts counter, checks if able to increase session length and returns value
  incrementUp(){

    if(this.timerType.minutes < this.timerType.sessionMax){
      this.timerType.minutes += this.timerType.incrementRate;
    }

    return this.pad(this.timerType.minutes);
  }

  // Checks if able to decrased session length and returns value
  decrementDown(){
    this.stop();

    if(this.timerType.minutes > this.timerType.sessionMin){
      console.log("In:"+this.timerType.minutes);
      this.timerType.minutes -= this.timerType.incrementRate;
    }
    console.log("passed back:"+ this.pad(this.timerType.minutes));
    return this.pad(this.timerType.minutes);
  }

}
