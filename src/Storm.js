var Storm = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

Storm.prototype = Object.create(Dancer.prototype);
Storm.prototype.constructor = Storm;

Storm.prototype.step = function() {
  if (this.move) {
    this.top =  $("body").height() * Math.random();
    this.left =  $("body").width() * Math.random();
    this.setPosition();
  }
    Dancer.prototype.step.call(this);
};


