
/**
 * Deck Shuffler
 * -Creates deck of cards as objects and return the shuffled result. 
 */



//Shuffle function using shuffle algorithm 

function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

//Creates 52 unique card pairings using suites and ranks and pushes them to the deck array.

function createDeck() {
  var suites = ['♠︎', '♣︎', '♥︎', '♦︎'];
  var ranks = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  var deck = [];
  for (let s = 0; s < suites.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      let card = [suites[s], ranks[r]];
      deck.push(card);
    }
  }
  return deck;
}

let newDeck = createDeck();

shuffle(newDeck);


//Log a concatenated string with each card in shuffled order
for (let d = 0; d < newDeck.length; d++) {
  let fin = console.log(`${newDeck[d][1]} of ${newDeck[d][0]}`)
}

