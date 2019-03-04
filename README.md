# Scoreboard Manager Component

This component can be used to take care of the scoreboard in javascript games. This component handles all the code necessary for adding user data to a scoreboard in the form of a javascript object. This component also handles the filtering of this data which can be necessary once the leaderboard begins to grow. With this component the user can also make use of a timer which is often added to game scoreboards. With this the user can order the scoreboard in terms of time, score, name or even score per minute. Lastly the component will handle the display of the scoreboard allowing the user to pick from a number of scoreboard templates.

## Feature 1:
## Add scores and name to list
When add to to scoreboard is called an input box will be prompted asking for users name. When the username is entered an object will be added to the leaderboard array with the players name, score and a player id. In the form of {name: “Aaron”, score: 100, playerID: 1}
Demo:
In this example the user adds the scoreboard manager to their project, creates an instance of the scoreboard manager and adds their score to it.

### Add scoreboard manager to project 
<script src="ScoreboardManager.js"></script>

### Create a scoreboard instance

this.scoreboard = new ScoreboardManager();

### Add score to leaderboard
#### this.score in this case is a variable that stores the players score as a int
this.scoreboard.addToBoard(this.score);

### Retrieve and output the updated scoreboard
console.log(this.scoreboard.getBoard());


## Feature 2:
## Session storage / Local storage
When the scoreboard manager is initialized the user has the option to save the scoreboard to session storage or local storage. 
If session storage is enabled the data will only be stored for one session. This means when the tab is closed the data will be deleted ( good for quick 1v1 type games).
If local storage is enabled the scores will be stored with no expiration date. The data will not be deleted when the browser is closed and all data will be available to retrieve at a later time.

### For session storage
#### Create a scoreboard instance 
this.scoreboard = new ScoreboardManager();

#### Initialize the scoreboard to use session storage
this.scoreboard.initBoard("Local");

#### Add score to leaderboard
this.scoreboard.addToBoard(this.score);

#### Retrieve and output the updated scoreboard
console.log(this.scoreboard.getBoard());

### For local storage
#### Create a scoreboard instance 
this.scoreboard = new ScoreboardManager();

#### Clear the scoreboard object in local storage if one already exists
this.scoreboard.clearLocalStorage();

#### Initialize the scoreboard to use local storage
this.scoreboard.initBoard("Local");

#### Add score to leaderboard
this.scoreboard.addToBoard(this.score);

#### Retrieve and output the updated scoreboard
console.log(this.scoreboard.getBoard());

## Feature 3:
## Filtering the data.
The scoreboard can get quite big over time so this will allow the user to sort through the scoreboard and retrieve only the information they want. E.g sort by Player name, score(lowest/ highest), score per minute(lowest or highest) , by time (lowest or highest) , playerID.



### Returns the scoreboard object in order of time (lowest to highest)
this.scoreboard.filterTime(-1);

### Returns the scoreboard object in order of time (highest to lowest)
this.scoreboard.filterTime(1);

### Returns the scoreboard object in order of score (lowest to highest)
this.scoreboard.filterScore(-1);

### Returns the scoreboard object in order of score (highest to lowest)
 this.scoreboard.filterScore(1);

### Returns the scoreboard object in order of score per minute (lowest to highest)
 this.scoreboard.filterSPM(-1);

### Returns the scoreboard object in order of score per minute (highest to lowest)
 this.scoreboard.filterSPM(1);






## Feature 4:
## Timer
When add to to scoreboard is called an input box will be prompted asking for users name. When the username is entered it will be added to the scoreboard along with the time from the display timer. Time in seconds (used for sorting in terms of time, the display timer will be displayed in the scoreboard ) along with a score per minute which is calculated and gives the user another interesting statistic and another way to sort the board. Again the manager needs to check if in local or session storage mode. If in session storage this data is simply added to the scores list. If in session storage the data will be added to the scores list and then saved back to local storage by overwriting).

### Create a scoreboard instance 
this.scoreboard = new ScoreboardManager();

### Clear the scoreboard object in local storage if one already exists
this.scoreboard.clearLocalStorage();

### Initialize the scoreboard to use local storage
this.scoreboard.initBoard("Local");

## Feature 5:
## Display highscores
Display the scores to the screen using a table created in css and html that will be scrollable and scalable (done in css)

### Generate and display the table
this.scoreboard.generateTable()
