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

    // the calculus = math.floor rounds eturns the largest integer less than or equal to number, random gives a number between 0 and 6 (in our case) + 1 sin
    this.singleDice = Math.floor(Math.random() * (6)) + oneNumber;

    //IF USER CHOSE MORE THAN ONE DIE, the calculus = math.floor rounds eturns the largest integer less than or equal to number random gives a number between 0 and 6 (in our case) + number of chosen dive
    if(form.value.numOfDice > 1){
      this.numberOfDice = Math.floor(Math.random() * (6 * form.value.numOfDice )) + form.value.numOfDice;
      this.displayRolledNum = this.numberOfDice;
    }
    //IF USER CHOSE ONE DIE
    else if(form.value.numOfDice == 1){
      this.displayRolledNum = this.singleDice;
    }
    else{
      this.displayRolledNum = 0;
    }
  }
}
export const oneNumber = 1;
