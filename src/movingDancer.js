var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
    this.setPosition();
    Dancer.prototype.step.call(this);
};

