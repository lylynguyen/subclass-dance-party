// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, borderColor, height, width) {
  this.top = top;
  this.left = left;
  this.move = true;
  this.timeBetweenSteps = timeBetweenSteps;
  this.borderColor = borderColor;
  this.height = height;
  this.width = width;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

};

Dancer.prototype.step = function() {
  // the basic Dancer.prototype doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function() {
    this.step();
  }.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left:this.left,
    border: this.borderColor,
    height: this.height,
    width: this.width
  };
  this.$node.css(styleSettings);
};


// Dancer.prototype.lineUp = function(){
//   for(var i=0; i<window.dancers.length; i++){
//       window.dancers[i].
//   }
// }

