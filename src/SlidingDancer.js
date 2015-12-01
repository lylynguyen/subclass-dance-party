var SlidingDancer = function(top, left, timeBetweenSteps) {
  this.xVelocity = 2;
  this.yVelocity = 2;
  Dancer.call(this, top, left, timeBetweenSteps);
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  var bodyHeight = $("body").height();
  var bodyWidth = $("body").width();


  if (this.top > bodyHeight || this.top < 0) {
    this.yVelocity = -this.yVelocity;
  }
  if (this.left > bodyWidth || this.left < 0) {
    this.xVelocity = -this.xVelocity;
  }
  if (this.move) {
    this.top += this.yVelocity  
    this.left +=  this.xVelocity
    this.setPosition();
    console.log(this.yVelocity);
  }
    Dancer.prototype.step.call(this);
};