var ChangingColorsDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

ChangingColorsDancer.prototype = Object.create(Dancer.prototype);
ChangingColorsDancer.prototype.constructor = ChangingColorsDancer;

ChangingColorsDancer.prototype.step = function() {
  if (this.move){
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
  }
    this.possibleColors = ["#ff0000","blue","gray", "green", "pink", "yellow", "purple"];
    this.borderColor = "10px solid " + this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
    this.setPosition();
    Dancer.prototype.step.call(this);
};
