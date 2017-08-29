//business logic
var player1 = "";
var player2 = "";

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
  }
}
// hold
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, next!!");
}








// User Interface
$(document).ready(function() {

      $("button#start").click(function(event) {
        player1 = new Player(true);
        player2 = new Player(false);
        $(".player-console").show();
        $(".start-menu").hide();

        var player1Name = $(".player1Name").val();
        $("#player1Name").text(player1Name);

        var player2Name = $(".player2Name").val();
        $("#player2Name").text(player2Name);

        player1.playerName = player1Name;
        player2.playerName = player2Name;

      });

      $("button#player1-roll").click(function(event) {
        player1.roll = throwdice();
        $("#die-roll-1").text(player1.roll);
        player1.rollone();
        $("#round-total-1").text(player1.tempscore);
      });
