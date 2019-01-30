class Game
{
  constructor()
  {
    gameNs.scoreboard1 = new ScoreboardManager();
    gameNs.scoreboard1.initBoard("session");
    gameNs.scoreboard1.startTimer();

    this.score = 50;
    gameNs.scoreboard1.addToBoard(this.score);

    gameNs.scoreboard1.filterSPM(-1);

    console.log(gameNs.scoreboard1.getBoard());



  }
  update(){
    // window.requestAnimationFrame(gameNs.game.update);
    //gameNs.scoreboard.getDisplayTimer();

    //if(gameNs.scoreboard.getDisplayTimer() == "00:02"){

    //  gameNs.scoreboard.addToBoard(50);
    //  gameNs.scoreboard.filterTime(1);
    //  gameNs.scoreboard.generate_table()

    }



}
