import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {

  intervalNum:number = 0;
  coinFlipped:boolean = false;

  headsOrTails:string = '';

  constructor() { }

  ngOnInit() {
  }

  coinFlip(){
    this.intervalNum = Math.floor(Math.random() * (2)) + 1;

    if(this.intervalNum == 1){
      this.coinFlipped = true;

    }
    else if(this.intervalNum == 2){
      this.coinFlipped = false;

    }

  }

}
