$(document).ready(function() {
  
  var winscount = 0;
    $("#winslocation").html("Wins: <h4>" + winscount + "</h4>");
  var lossescount = 0;
    $("#losseslocation").html("Losses: <h4>" + lossescount + "</h4>");
  var currentscore = 0;
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>")
  var randomgoalnumber = Math.floor((Math.random() *100) + 20);
    $("#goalnumlocation").html("Your goals is to match: <h2>" + randomgoalnumber + "</h2>")

  var gem1value = Math.floor((Math.random() *11) + 1);
    console.log(gem1value);

  var gem2value = Math.floor((Math.random() *11) + 1);
  console.log(gem2value);

  var gem3value = Math.floor((Math.random() *11) + 1);
  console.log(gem3value);

  var gem4value = Math.floor((Math.random() *11) + 1);
  console.log(gem4value);

  function winorlose() {
    if (currentscore === randomgoalnumber) {
      console.log("you win");
    }
    else if (currentscore > randomgoalnumber) {
      console.log("you lose");
    }   
  }

  $("#gem1").on("click", function () {
        currentscore += gem1value;
        console.log("current score" + currentscore);
        $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
        winorlose();
  });

  $("#gem2").on("click", function () {
    currentscore += gem2value;
    console.log("current score" + currentscore);
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
    winorlose();
  });

  $("#gem3").on("click", function () {
    currentscore += gem3value;
    console.log("current score" + currentscore);
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
    winorlose();
  });

  $("#gem4").on("click", function () {
    currentscore += gem4value;
    console.log("current score" + currentscore);
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
    winorlose();
  });
  
});