var Earth = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

Earth.prototype = Object.create(Dancer.prototype);
Earth.prototype.constructor = Earth;

Earth.prototype.step = function() {
  if (this.move){
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
  }
    this.possibleColors = ["#F7F7F7","#CDCDCD","#555555", "#CFCFCF", "E5E5E5", "F0F0F0", "999999"];
    this.borderColor = "10px solid " + this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
    this.setPosition();
    Dancer.prototype.step.call(this);
};
