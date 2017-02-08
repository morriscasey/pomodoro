class PomodoroTimer{
  constructor(){
    this.minutes = 25;
    this.seconds = 0;
    this.sessionMax = 200;
    this.sessionMin = 0;
    this.incrementRate = 1;
  }

  pad(value) {
      if(value < 10){
        return "0" + value;
      }else{
        return value;
      }
  }

  display(){
    return this.pad(this.minutes) + ":" + this.pad(this.seconds);
  }

}
