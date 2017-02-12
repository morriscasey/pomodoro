// TODO: Change fields to private and add getter and setters.
class Timer{
  constructor(name, defaultMinutes, maxSize, minSize, incrementRate){
    this.name = name;
    this.minutes = defaultMinutes;
    this.seconds = 0;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.incrementRate = incrementRate;
    this.interval = false;
  }

  // Resets seconds to 0;
  resetSeconds(){
    this.seconds = 0;
  }

  // Interval stores the setInterval method for the timer. PauseTimer, clears the method
  // and sets to false for future application.
  pauseTimer(){
    clearTimeout(this.interval);
    this.interval = false;
  }

  // Depending on the timer minutes decrease.
  decreaseValue(){
    console.log("Decreased");
    if(this.minutes > this.minSize){
      this.minutes -= this.incrementRate;
    }

    return this.minutes;
  }

  // Depending on the timer minutes increase.
  increaseValue(){
    console.log("Increased");
    if(this.minutes < this.maxSize){
      this.minutes += this.incrementRate;
    }

    return this.minutes;
  }
}
