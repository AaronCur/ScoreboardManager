class Game
{
  constructor()
  {
    gameNs.scoreboard = new ScoreboardManager();
    gameNs.scoreboard = new ScoreboardManager();
    gameNs.scoreboard.startTimer();
    gameNs.scoreboard.clearSessionStorage();
    gameNs.scoreboard.initBoard("local");
    this.score = 50;
    gameNs.scoreboard.addToBoard(this.score);
    //gameNs.scoreboard.filterName("jack");
    //gameNs.scoreboard.filterTime(-1);
    //gameNs.scoreboard.filterScore(-1);
    gameNs.scoreboard.filterSPM(-1);

    console.log(gameNs.scoreboard.getBoard());

  }
  update(){
    // window.requestAnimationFrame(gameNs.game.update);
    //gameNs.scoreboard.getDisplayTimer();

    //if(gameNs.scoreboard.getDisplayTimer() == "00:02"){

    //  gameNs.scoreboard.addToBoard(50);
    //  gameNs.scoreboard.filterTime(1);
    //  gameNs.scoreboard.generate_table()

    }

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#ffffff";
    ctx.fillStyle ='white';
    ctx.font = '55px Adventure Regular';
    ctx.strokeStyle = 'black';
    ctx.fillText(this.time,100,100);
    ctx.strokeText(this.time,100,100);



  }
}
