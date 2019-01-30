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

    console.log("Session Storage");
    console.log(gameNs.scoreboard1.getBoard());


    gameNs.scoreboard2 = new ScoreboardManager();
    gameNs.scoreboard2.initBoard("local");
    gameNs.scoreboard2.startTimer();

    this.score = 50;
    gameNs.scoreboard2.addToBoard(this.score);

    gameNs.scoreboard2.filterSPM(-1);

    console.log("Local Storage");
    console.log(gameNs.scoreboard2.getBoard());



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
