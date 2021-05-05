import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  diceChoice:any;
  displayRolledNum:number = 0;
  singleDice:number = 0;
  numberOfDice:number = 0;
  constructor() { }

  ngOnInit() {
    this.diceChoice = new FormGroup({
      numOfDice: new FormControl()
    });
  }

  diceRoll(form: FormGroup){

    this.singleDice = Math.floor(Math.random() * (6)) + oneNumber;

    if(form.value.numOfDice > 1){
      this.numberOfDice = Math.floor(Math.random() * (6 * form.value.numOfDice )) + form.value.numOfDice;
      this.displayRolledNum = this.numberOfDice;
    }
    else if(form.value.numOfDice == 1){
      this.displayRolledNum = this.singleDice;
    }
    else{
      this.displayRolledNum = 0;
    }
  }
}
export const oneNumber = 1;
