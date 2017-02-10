class TimeManager{
  // Constructor that requires a session timer and break timer
  constructor(){
    this.sessionTimer = new Timer("Session", 25, 200, 1, 1);
    this.breakTimer = new Timer("Break", 5, 100, 1,1);
    this.activeTimer = this.sessionTimer;
  }

  changeActiveTimer(){
    if(this.activeTimer.name == "Session"){
      this.activeTimer = this.breakTimer;
    }else{
      this.activeTimer = this.sessionTimer;
    }
  }


}
