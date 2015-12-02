var EarthGrowing = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

EarthGrowing.prototype = Object.create(Dancer.prototype);
EarthGrowing.prototype.constructor = EarthGrowing;

EarthGrowing.prototype.step = function() {
  if (this.move){
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
  }
    this.possibleColors = ["#F7F7F7","#CDCDCD","#555555", "#CFCFCF", "E5E5E5", "F0F0F0", "999999"];
    this.borderColor = "10px solid " + this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
    this.setPosition();
    Dancer.prototype.step.call(this);
};
