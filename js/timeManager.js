class TimeManager{
  // Constructor for now built concrete class for session and break timers.
  constructor(elementHooks){
    this._sessionTimer = new Timer("Session", 25, 200, 1, 1);
    this._breakTimer = new Timer("Break", 5, 100, 1,1);
    this._activeTimer = this.sessionTimer;
    this.totalOfPomodoros = 0;
    self = this;
  }

  get activeTimer(){
    return this._activeTimer;
  }

  set activeTimer(newTimer){
    this._activeTimer = newTimer;
  }

  get sessionTimer(){
    return this._sessionTimer;
  }

  get breakTimer(){
    return this._breakTimer;
  }
  
  // Manages switching back and forth between timers
  changeActiveTimer(){
    if(this.activeTimer.name == "Session"){
      this.activeTimer = this.breakTimer;
    }else{
      this.activeTimer = this.sessionTimer;
    }
  }
}
