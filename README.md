# Game-of-War

This is an automated Game of War Javascript game.
 When ran it will create a deck of cards and shuffle them. 
 It then splits the deck in 2 and distributes it evenly to both computer generated players.
 Once the cards are distributed the first in the deck of each player is compared. 
 Whoever is the winner will take both cards and push them to the back of the deck. 
 If both cards are even War is declared. The game will then burn through the first 3 cards in the deck of each player. 
 Whoever has the bigger 4th card will get back their cards plus the opponets cards. 
 If one player is unable to declare war due to having less than 4 cards the player loses. 
 Once one player reaches a deck of 52 cards, the game will end and declare a winner, it does this to avoid an infinite loop.
