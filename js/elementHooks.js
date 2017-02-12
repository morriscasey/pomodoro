class ElementHooks{
  constructor(parentID){
    if (typeof parentID !== 'undefined') {
        this._parent = parentID;
    }else{
      console.log("Errror: Insert document.getElementById() or document in constructor.");
    }
  }

  check(){
    if (typeof this._displayMinutes === 'undefined'){
      console.log("Error: ElementHooks.setDisplayMinutes is undefined.");
    }

    if (typeof this._displaySeconds === 'undefined'){
      console.log("Error: ElementHooks.setDisplaySeconds is undefined.");
    }
    if (typeof this._sessionField === 'undefined'){
      console.log("Error: ElementHooks.setSessionField is undefined.");
    }
    if (typeof this._breakField === 'undefined'){
      console.log("Error: ElementHooks.setBreakField is undefined.");
    }
    if (typeof this._titleField === 'undefined'){
      console.log("Error: ElementHooks.setTitleField is undefined.");
    }
    if (typeof this._timerButton === 'undefined'){
      console.log("Error: ElementHooks.setTimerButton is undefined.");
    }
  }
  // Setters and getters for required fields.
  get parentField(){
    return this._parent;
  }
  set displayMinutes(minutesID){
    this._displayMinutes = minutesID;
  }

  get minutesDisplayField(){
    return this._displayMinutes;
  }

  set displaySeconds(secondID){
    this._displaySeconds = secondID;
  }

  get secondsDisplayField(){
    return this._displaySeconds;
  }

  set sessionField(sessionFieldID){
    this._sessionField = sessionFieldID;
  }

  get sessionField(){
    return this._sessionField;
  }

  set breakField(breakFieldID){
    this._breakField = breakFieldID;
  }

  get breakField(){
    return this._breakField;
  }

  set titleField(titleFieldID){
    this._titleField = titleFieldID;
  }

  get titleField(){
    return this._titleField;
  }

  set timerButton(timerButtonID){
    this._timerButton = timerButtonID;
  }

  get timerButton(){
    return this._timerButton;
  }



}
