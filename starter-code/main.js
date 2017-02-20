console.log("JS file is connected to HTML! Woo!")
/* var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

 if (cardTwo===cardFour) {
	alert("You found a match!");
}	else {
		alert("Sorry, try again.")
}
*/

var board = document.getElementById('game-board');

function createCards() {
	for (var i=0; i<4; i++) {
		var cardCreation = document.createElement('div');
		cardCreation.className='card';
		board.appendChild(cardCreation);
	};
};
createCards();
