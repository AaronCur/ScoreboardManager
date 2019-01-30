var gameNs = {};
class Game
{
  constructor()
  {

    gameNs.scoreboard = new ScoreboardManager();
    gameNs.scoreboard.initBoard("local");
    gameNs.scoreboard.startTimer();
    gameNs.output = true;







  }
  update(){
     window.requestAnimationFrame(gameNs.game.update);

     gameNs.time = gameNs.scoreboard.getDisplayTimer();

     if(gameNs.time=="00:15")
     {
       gameNs.score = 50;
        gameNs.scoreboard.addToBoard(gameNs.score);
        gameNs.scoreboard.filterScore(-1);
        if(gameNs.output == true)
        {

          console.log(gameNs.scoreboard.getBoard());
          gameNs.output = false;
        }

     }



     var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.save();
    document.body.style.background = "grey";

    ctx.fillStyle ='white';
    ctx.font = '55px Adventure Regular';
    ctx.strokeStyle = 'black';
    ctx.fillText(gameNs.time,390,60);
    ctx.strokeText(gameNs.time,390,60);


    }



}
