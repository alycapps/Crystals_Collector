$(document).ready(function() {
  
  var winscount = 0;
    $("#winslocation").html("Wins: <h4>" + winscount + "</h4>");
  var lossescount = 0;
    $("#losseslocation").html("Losses: <h4>" + lossescount + "</h4>");
  var currentscore = 0;
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>")
  var randomgoalnumber = Math.floor((Math.random() *100) + 20);
    $("#goalnumlocation").html("Your goals is to match: <h2>" + randomgoalnumber + "</h2>")

// assigning random value to each gem
  function gemvalue(id) {
    $(id).data("value", Math.floor((Math.random() *11) + 1));
  }

  for (i=1; i<5; i++) {
    gemvalue("#gem" + i);
  }

  // determine if score wins orloses
  function winorlose() {
    if (currentscore === randomgoalnumber) {
      winscount ++;
      $("#winslocation").html("Wins: <h4>" + winscount + "</h4>");
      resetgame();
      $("#winorloselocation").html("<h5>" + "You win!" + "</h5>");
    }
    else if (currentscore > randomgoalnumber) {
      lossescount ++;
      $("#losseslocation").html("Losses: <h4>" + lossescount + "</h4>");
      resetgame();
      $("#winorloselocation").html("<h5>" + "You lost :(" + "</h5>");

    }   
  }

  // reset values after a win or loss
  function resetgame() {
    currentscore = 0;
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>")
    randomgoalnumber = Math.floor((Math.random() *100) + 20);
    $("#goalnumlocation").html("Your goals is to match: <h2>" + randomgoalnumber + "</h2>")
    for (i=1; i<5; i++) {
      gemvalue("#gem" + i);
    }
  }

  //make gem images clickable and add to score
$(".gem img").on("click", function () {
    currentscore += $(this).data("value");
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
    winorlose();
  });

});