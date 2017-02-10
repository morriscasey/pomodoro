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

  pad(value) {
      if(value < 10){
        return "0" + value;
      }else{
        return value;
      }
  }

  decreaseValue(){
    console.log("Decreased");
    if(this.minutes > this.minSize){
      this.minutes -= this.incrementRate;
    }

    return this.minutes;
  }

  increaseValue(){
    console.log("Increased");
    if(this.minutes < this.maxSize){
      this.minutes += this.incrementRate;
    }

    return this.minutes;
  }
  // Returns value of minutes with padding for values less than 10
  getMinutes(){
    return this.pad(this.minutes);
  }

  // Returns value of minutes with padding for values less than 10
  getSeconds(){
    return this.pad(this.seconds);
  }



}
