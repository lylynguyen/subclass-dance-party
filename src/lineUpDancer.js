var GrowingDancer = function(top, left, timeBetweenSteps){
  this.move = true;
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  if (this.move) {
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
    this.setPosition();
  }

    Dancer.prototype.step.call(this);
};


