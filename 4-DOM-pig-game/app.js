/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, previusRoll, winScore;

init();

//anon function
document.querySelector(".btn-roll").addEventListener("click", function() {
	if (gamePlaying) {
		// 1. Rand number
		dice = Math.floor(Math.random() * 6) + 1;



		// 2. Display the result
		var diceDOM = document.querySelector(".dice");
		diceDOM.style.display = "block";
		diceDOM.src = "dice-" + dice + ".png";

		// 3. Update the round score if the rolled number was not a 1
		if (dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector(
				"#current-" + activePlayer
			).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector(".btn-hold").addEventListener("click", function() {
	if (gamePlaying) {
		// get win score value
		winScore = document.querySelector('.input-field').value;

		// add current score to global score
		scores[activePlayer] += roundScore;

		// update the UI
		document.querySelector("#score-" + activePlayer).textContent =
			scores[activePlayer];

		// check if player won the game
		if (scores[activePlayer] >= winScore) {
			document.querySelector("#name-" + activePlayer).textContent =
				"Winner!";
			document.querySelector(".dice").style.display = "none";

			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.add("winner");

			document
				.querySelector(".player-" + activePlayer + "-panel")
				.classList.remove("active");

			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
});
document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
	//Next player
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScore = 0;

	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	document.querySelector(".dice").style.display = "none";
}

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	previusRoll = 0;

	document.querySelector(".dice").style.display = "none";

	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;

	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;

	document.getElementById("name-0").textContent = "Player 1";
	document.getElementById("name-1").textContent = "Player 2";

	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.remove("active");

	document.querySelector(".player-0-panel").classList.add("active");
}

/*
YOUR 3 CHALLENGES

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (HINT: Always save the 
previous dice rolls in a separate variable)


2. Add an input field to the HTML where players can set the winning 
score, so that they can change the predefined score of 100. (HINT: 
you can read that value with the .value property in javascipt.)
--DONE--

3. Add another dice to the game, so that there are two dices now.
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look
at the CSS code for the first one)

*/
