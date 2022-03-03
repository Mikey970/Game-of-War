class Card{
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}
let loopBreak = false;
class Deck {
  constructor() {
    this.length = 52
    this.cards = []
    
  }
  createDeck() {
    let rankArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let scoreArr = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    let suitArr = ['clubs', 'hearts', 'spades', 'diamonds']
    for (let i = 0; i < suitArr.length; i++) {
      for (let j = 0; j < rankArr.length; j++) {
        this.cards.push(new Card(suitArr[i], rankArr[j], scoreArr[j]))
      }
    }
  }
  randomDraw() {
    let randomInt = Math.floor(Math.random() * this.cards.length)
    console.log(this.cards[randomInt])
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let shuf = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = shuf;
    }
  }

}


//note to self use while loop for whole game
let player1 = { 
deck1: [],
}
let player2 = {
deck2: [],
}

const fullDeck = new Deck;
fullDeck.createDeck();
fullDeck.shuffleDeck();
player2.deck2 = (fullDeck.cards.splice(26, 52))
player1.deck1 = (fullDeck.cards.splice(0, 26))



function compareScores() {
  let score1 = player1.deck1[0].rank
  let score2 = player2.deck2[0].rank
  
  let card1 = player1.deck1[0];
  let card2 = player2.deck2[0];
  
  
  
    
  
  if (score1 > score2) {
    player1.deck1.push(player1.deck1[0])
    player1.deck1.push(player2.deck2[0])
    player1.deck1.shift()
    player2.deck2.shift()
    console.log("Player 1 Won, Cards held " + player1.deck1.length + " Card Played by Player 1: " + score1 + " Card Played by Player 2: " + score2)
   
    
  } else if (score1 < score2) {
    
    player2.deck2.push(player2.deck2[0])
    player2.deck2.push(player1.deck1[0])
    player1.deck1.shift()
    player2.deck2.shift()
    console.log("Player 2 Won, Cards held: " + player2.deck2.length + " Card Played by Player 1: "+ score1 + " Card Played by Player 2: " + score2)
      
 
  } else if (score1 == score2) {
    if (player2.deck2.length <= 3 || player1.deck1.length <= 3) {
      loopBreak = true;
      console.log("GAME OVER NOT ENOUGH CARDS FOR WAR... FINAL SCORE Player 1: " + player1.deck1.length + " Player 2: " + player2.deck2.length)
    }
    else if (player1.deck1[2].rank >= player2.deck2[2].rank) {
      player1.deck1.push(card2)
      player2.deck2.shift(card2)
      player1.deck1.push(player2.deck2[1])
      player2.deck2.shift(player2.deck2[1])
      player1.deck1.push(player2.deck2[2])
      player2.deck2.shift(player2.deck2[2])
      player1.deck1.push(player2.deck2[3])
      player2.deck2.shift(player2.deck2[3])
      console.log(" WAR DECLARED Player 1 Won, Cards Held " + player1.deck1.length)
        
    } else if (player1.deck1[2].rank < player2.deck2[2].rank) {
      player2.deck2.push(card1);
      player1.deck1.shift(card1)
      player2.deck2.push(player1.deck1[1])
      player1.deck1.shift(player1.deck1[1])
      player2.deck2.push(player1.deck1[2])
      player1.deck1.shift(player1.deck1[2])
      player2.deck2.push(player1.deck1[3])
      player1.deck1.shift(player1.deck1[3])
      console.log(" WAR DECLARED Player 2 Won, Cards Held " + player2.deck2.length)
    }
        
  }
  else {
    console.log("Game stopped working")
  }
     
  if (player1.deck1.length > 51) {
    console.log("Game Over, Player 1 Won with a score of " + player1.deck1.length)
  }
  if (player2.deck2.length > 51) {
    console.log("Game Over, Player 2 Won with a score of " + player2.deck2.length)
  }
}
  





while (player1.deck1.length < 52 && player2.deck2.length < 52) {
  if (loopBreak == true) break;
  compareScores()
}
