import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public cardData;
  @Output() public sendEventToCardHolder = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.sendEventToCardHolder.emit(this.cardData.cardId);
  }

}
