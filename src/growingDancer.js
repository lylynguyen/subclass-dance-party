var GrowingDancer = function(top, left, timeBetweenSteps){
  ChangingColorsDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.addClass('GrowingDancer');
};
GrowingDancer.prototype = Object.create(ChangingColorsDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function(){
  ChangingColorsDancer.prototype.step.call(this);
  this.height = Math.random() * 200;
  this.width = Math.random() * 200;
};
