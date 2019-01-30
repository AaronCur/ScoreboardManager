class Game
{
  constructor()
  {


    gameNs.scoreboard1 = new ScoreboardManager();
    gameNs.scoreboard1.initBoard("session");
    gameNs.scoreboard1.startTimer();

    this.score = 50;

    gameNs.output = true;


  }
  update(){
     window.requestAnimationFrame(gameNs.game.update);

     gameNs.time = gameNs.scoreboard1.getDisplayTimer();


     if(gameNs.time == "00:02"){
       gameNs.scoreboard1.addToBoard(100);

       if(gameNs.output == true)
       {

              console.log("Filter by SPM Low-High");
              gameNs.scoreboard1.filterSPM(-1);
              console.log(gameNs.scoreboard1.getBoard());

              console.log("Filter by SPM Low-High");
              gameNs.scoreboard1.filterSPM(-1);
              console.log(gameNs.scoreboard1.getBoard());

              console.log("Filter by Score High-Low");
              gameNs.scoreboard1.filterScore(-1);
              console.log(gameNs.scoreboard1.getBoard());

              console.log("Filter by Score Low-High");
              gameNs.scoreboard1.filterScore(1);
              console.log(gameNs.scoreboard1.getBoard());

              console.log("Filter by Time Low-High");
              gameNs.scoreboard1.filterTime(1);
              console.log(gameNs.scoreboard1.getBoard());

              console.log("Filter by Time High-Low");
              gameNs.scoreboard1.filterTime(-1);
              console.log(gameNs.scoreboard1.getBoard());

         gameNs.output = false;
       }
     }


    }



}
