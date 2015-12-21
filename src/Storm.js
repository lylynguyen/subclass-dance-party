var Storm = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="asteroid"></span>');

};

Storm.prototype = Object.create(Dancer.prototype);
Storm.prototype.constructor = Storm;

Storm.prototype.step = function() {
    setTimeout(function() {
      if (this.move) {
        this.top =  $("body").height() * Math.random();
        this.left =  $("body").width() * Math.random();
        this.height = 40;
        this.width = 40;
        this.setPosition();  
      }
        Dancer.prototype.step.call(this);
      }.bind(this), 300);

};


