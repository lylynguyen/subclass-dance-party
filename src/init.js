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

});
