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

  constructor() { }

  ngOnInit() {
  }

  coinFlip(){
    this.headsOrTails = Math.floor(Math.random() * (2)) + 1;

    if(this.headsOrTails == 1){
      if(this.coinFlipped = true){
        this.coinFlipped = false;
      }
      else if(this.coinFlipped = false){
        this.coinFlipped = true;
      }
      this.coinFlipped = true;
    }
    else if(this.headsOrTails == 2){
      if(this.coinFlipped = false){
        this.coinFlipped = true;
      }
      else if(this.coinFlipped = true){
        this.coinFlipped = false;
      }
    }
  }

}
