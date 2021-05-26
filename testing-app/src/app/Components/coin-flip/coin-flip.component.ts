import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {

  headsOrTails:number = 0;
  coinFlipped:boolean = false;
  displayResult: string = '';
  duplicateResult: string = '';
  headsAgain: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  coinFlip(){
    this.headsOrTails = Math.floor(Math.random() * (2)) + 1;

    if(this.headsOrTails == 1){
      this.displayResult = 'Tails';
      this.coinFlipped = true;
    }
    else if(this.headsOrTails == 2){
      this.displayResult = 'Heads';
      this.coinFlipped = false;
    }

  }

}
