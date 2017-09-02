var scoreToMatch;
var userScore;
var blueCrystalValue;
var redCrystalValue;
var yellowCrystalValue;
var purpleCrystalValue;
var totalWins = 0;
var totalLoses = 0;

//start game function to initialize all variables
function startGame(){
	//initialize puzzle values
	scoreToMatch = Math.floor(Math.random() * 120) + 19;
	userScore  = 0;
	blueCrystalValue  = Math.floor(Math.random() * 12) + 1;
	redCrystalValue  = Math.floor(Math.random() * 12) + 1;
	yellowCrystalValue  = Math.floor(Math.random() * 12) + 1;
	purpleCrystalValue  = Math.floor(Math.random() * 12) + 1;

	console.log("red: " + redCrystalValue);
	console.log("blue: " + blueCrystalValue);
	console.log("yellow: " + yellowCrystalValue);
	console.log("purple: " + purpleCrystalValue);

	//reset the DOM to display the start of a new puzzle
	$("#matchScoreContainer").html(scoreToMatch);
	$("#scoreBoxId").html("<span>Your total score is: </span>");
	$("#yourScore").html("<span>0</span>");
}

function checkScore(playerScore){
	if(playerScore === scoreToMatch){
		totalWins = totalWins + 1
		$("#winBox").html("<span>Wins: " + totalWins + "</span>");
		startGame();
	}
	if(playerScore > scoreToMatch){
		totalLoses = totalLoses + 1
		$("#loseBox").html("<span>Loses: " + totalLoses + "</span>");
		startGame();
	}
}

startGame();


$("#redCrystal").on("click",function(){
	userScore  = userScore  + redCrystalValue;
	console.log(userScore);
	$("#yourScore").html("<span>" + userScore + "</span>");
	checkScore(userScore);
});

$("#blueCrystal").on("click",function(){
	userScore  = userScore  + blueCrystalValue;
	console.log(userScore);
	$("#yourScore").html("<span>" + userScore + "</span>");
	checkScore(userScore);
});

$("#yellowCrystal").on("click",function(){
	userScore  = userScore  + yellowCrystalValue;
	console.log(userScore);
	$("#yourScore").html("<span>" + userScore + "</span>");
	checkScore(userScore);
});

$("#purpleCrystal").on("click",function(){
	userScore  = userScore  + purpleCrystalValue;
	console.log(userScore);
	$("#yourScore").html("<span>" + userScore + "</span>");
	checkScore(userScore);
});