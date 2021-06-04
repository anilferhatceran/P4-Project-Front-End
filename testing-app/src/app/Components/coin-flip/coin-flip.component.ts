import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {
  //these are our variables for coinflip function and the logic behind it,
  headsOrTails:number = 0;
  tailsFlipped:boolean = false;
  displayResult: string = '';

  constructor() { }

  ngOnInit() {

        // the calculus = math.floor rounds eturns the largest integer less than or equal to number, random gives a number between 0 and 2 (in our case) + 1}
    this.headsOrTails = Math.floor(Math.random() * (2)) + 1;

    if(this.headsOrTails == 1){
      this.displayResult = 'Tails';
      this.tailsFlipped = true;


    }
    else if(this.headsOrTails == 2){
      this.displayResult = 'Heads';
      this.tailsFlipped = false;

    }


  }

  coinFlip(){
    //reload window to reset the coin functon
    window.location.reload();

  }

}
