var ChangingColorsDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="earth"></span>');

};

ChangingColorsDancer.prototype = Object.create(Dancer.prototype);
ChangingColorsDancer.prototype.constructor = ChangingColorsDancer;

ChangingColorsDancer.prototype.step = function() {
  if (this.move){
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
    this.height = 175;
    this.width = 315;
  }
    this.possibleColors = ["#F7F7F7","#CDCDCD","#555555", "#CFCFCF", "E5E5E5", "F0F0F0", "999999"];
    this.borderColor = "10px solid " + this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
    this.setPosition();
    Dancer.prototype.step.call(this);
};


