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
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardCreation = document.createElement('div');
		cardCreation.className='card';
		cardCreation.setAttribute('data-card', cards[i]);
		cardCreation.addEventListener('click', isTwoCards);
		board.appendChild(cardCreation);
	}
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card')==='king') {
			this.innerHTML = '<img src="playing-card-161489_1280.png">';
		}
		else {
			this.innerHTML = '<img src="playing-card-161491_1280.png">';
		}	
	if (cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0]===cards[1]) {
		alert("You found a match!");
 }	
	else {
		alert("Sorry, try again.")
 }
}


createBoard();