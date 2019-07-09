import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-holder',
  templateUrl: './cards-holder.component.html',
  styleUrls: ['./cards-holder.component.css']
})
export class CardsHolderComponent implements OnInit {

  public cardsArray = [];
  // Used to enable and disable chances to player
  // Score is incremented only when chace is true
  private hasChance = false;

  // Loads the component based on the game type
  // 1 = Arcade (Time Bound)
  // 2 = Battlefield (3 tries)
  private gameType = 2;
  private hardness = 4;
  // Used to store the state of the game 
  private isGameActive = false;
  // Count number of missed
  private misses = 0;
  private selectedCard = {};
  public score = 0;

  // Timer function
  private cardClickTimeInterval = 1000;
  private cardClickTimer: any;
  // Game Timer
  private gameTimer: any;
  // Time Limit for Aracde
  private gameTimeLimit = 12000;

  constructor() { }

  ngOnInit() {
    this.generateCards();
    if (this.gameType === 1) {
      this.gameTimer = setTimeout(() => {
        this.gameOver()
      }, this.gameTimeLimit);
    }
    this.cardClickTimer = setInterval(() => {
      this.pickCard();
    }, this.cardClickTimeInterval);
    this.isGameActive = true;
  }

  /**
   * Generate cards based on hardness level.
   */
  generateCards() {
    for (let index = 1; index <= this.hardness; index++) {
      this.cardsArray.push({
        cardId: index,
        isActive: false
      });
    }
  }

  /**
   * Function to recieve click event from the card component and validate 
   * if the card clicked is the correct card or not.
   * @param cardId Id of the card clicked
   */
  cardClicked(cardId: number) {
    if (this.isGameActive) {
      if ((this.selectedCard['cardId'] === cardId) && (this.hasChance === true)) {
        this.score++;
        this.hasChance = false;
        clearInterval(this.cardClickTimer);
        this.pickCard();
        this.cardClickTimer = setInterval(() => {
          this.pickCard();
        }, this.cardClickTimeInterval);
      } else {
        this.misses++;
        if (this.gameType === 2 && this.misses >= 3) {
          this.gameOver();
        }
      }
    }
  }

  /**
   * Pick card object from cards array and change card color
   */
  pickCard() {
    this.selectedCard['isActive'] = false;
    let card = this.cardsArray[this.pickRandomCardId()];
    while (card === this.selectedCard) {
      card = this.cardsArray[this.pickRandomCardId()];
    }
    this.selectedCard = card;
    this.selectedCard['isActive'] = true;
    this.hasChance = true;
  }

  /**
   * Function used to generate a random number which is used as a card id.
   * TODO Change max to a constant and remove parameter
   */
  public pickRandomCardId(): number {
    return Math.floor(Math.random() * this.cardsArray.length);
  }

  /**
   * Fuction for ending game
   * Clear the time interval for card click timer
   * Set the currently selected card to false
   * set isGameActive to false to prevent click handling.
   */
  gameOver() {
    clearInterval(this.cardClickTimer);
    this.selectedCard['isActive'] = false;
    this.isGameActive = false;
  }

}
