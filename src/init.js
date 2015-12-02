$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
 
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      20
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.freeze').on('click', function(e){
    for(var i = 0; i < window.dancers.length; i++){
      var currentDancer = window.dancers[i];
      currentDancer.move = !currentDancer.move;
    }
  });

  $('.lineUp').on('click', function(e) {
    var totalWidth = $('body').width()
    var sep = totalWidth/window.dancers.length
    e.preventDefault()
    for(var i = 0; i < window.dancers.length; i++){
      var currentDancer = window.dancers[i];
      currentDancer.move = !currentDancer.move;
      currentDancer.$node.animate({
        top: "400px",
        left: i*sep
      }, 500);
    }
  })

  $('.pilot').on("click", function(){

  })
  $('.pair').on('click', function(e) {
    for(var i = 0; i < window.dancers.length; i++){
      var closestDistance = 999999;
      var closestIndex = -1;
      var currentDancer = window.dancers[i];
      for (var j = 0; j < window.dancers.length; j++) {
        if (i === j) {
          continue;
        }
        var otherDancer = window.dancers[j];
        var a  = Math.abs(currentDancer.top - otherDancer.top);
        var b = Math.abs(currentDancer.left - otherDancer.left);
        var distance = Math.sqrt(a*a + b*b);
          if (distance < closestDistance) {
            closestIndex = j;
            closestDistance = distance;
          }
      }
      
      window.dancers[closestIndex].top = currentDancer.top + 10;
      window.dancers[closestIndex].left = currentDancer.left + 10;
      window.dancers[closestIndex].yVelocity = currentDancer.yVelocity;
      window.dancers[closestIndex].xVelocity = currentDancer.xVelocity;

    }
  });
});
