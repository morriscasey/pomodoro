class TimeManager{
  // Constructor for now built concrete class for session and break timers.
  constructor(){
    this.sessionTimer = new Timer("Session", 25, 200, 1, 1);
    this.breakTimer = new Timer("Break", 5, 100, 1,1);
    this.activeTimer = this.sessionTimer;
    this.totalOfPomodoros = 0;
  }

  // Manages switch back and forth with each timer
  changeActiveTimer(){
    if(this.activeTimer.name == "Session"){
      this.activeTimer = this.breakTimer;
    }else{
      this.activeTimer = this.sessionTimer;
    }
  }
}
