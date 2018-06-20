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
      winscount ++;
      $("#winslocation").html("Wins: <h4>" + winscount + "</h4>");
      resetgame();
      $("#winorloselocation").html("<h5>" + "You win!" + "</h5>");
    }
    else if (currentscore > randomgoalnumber) {
      console.log("you lose");
      lossescount ++;
      $("#losseslocation").html("Losses: <h4>" + lossescount + "</h4>");
      resetgame();
      $("#winorloselocation").html("<h5>" + "You lost :(" + "</h5>");

    }   
  }

  function resetgame() {
    currentscore = 0;
    $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>")
    randomgoalnumber = Math.floor((Math.random() *100) + 20);
    $("#goalnumlocation").html("Your goals is to match: <h2>" + randomgoalnumber + "</h2>")
    gem1value = Math.floor((Math.random() *11) + 1);
    console.log(gem1value);
    gem2value = Math.floor((Math.random() *11) + 1);
    console.log(gem2value);
    gem3value = Math.floor((Math.random() *11) + 1);
    console.log(gem3value);
    gem4value = Math.floor((Math.random() *11) + 1);
    console.log(gem4value);
  }
  
function gemclick(gem) {
  currentscore += gem;
  console.log("current score" + currentscore);
  $("#currentscorebox").html("Your total score is: <h2>" + currentscore + "</h2>");
  winorlose();
}

  $("#gem1").on("click", function () {
    gemclick(gem1value);
  });

  $("#gem2").on("click", function () {
    gemclick(gem2value);
  });

  $("#gem3").on("click", function () {
    gemclick(gem3value);
  });

  $("#gem4").on("click", function () {
    gemclick(gem4value);
  });
  
});