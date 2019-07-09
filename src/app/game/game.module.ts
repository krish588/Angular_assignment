import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHolderComponent } from './game-holder/game-holder.component';
import { CardsHolderComponent } from './cards-holder/cards-holder.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [GameHolderComponent, CardsHolderComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameHolderComponent
  ]
})
export class GameModule { }
