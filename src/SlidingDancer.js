var SlidingDancer = function(top, left, timeBetweenSteps) {
  this.xVelocity = 2;
  this.yVelocity = 2;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pilot"></span>');
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  var bodyHeight = $("body").height();
  var bodyWidth = $("body").width();
   this.height = 175;
  this.width = 315;

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
  }
    Dancer.prototype.step.call(this);
};