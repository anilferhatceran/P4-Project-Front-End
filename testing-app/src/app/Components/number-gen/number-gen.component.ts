import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-gen',
  templateUrl: './number-gen.component.html',
  styleUrls: ['./number-gen.component.css']
})
export class NumberGenComponent implements OnInit {

  numberGenForm:any;
  intervalNum:number = 0;

  constructor() {

  }
  ngOnInit() {
    this.numberGenForm = new FormGroup({
      firstNumber: new FormControl(),
      lastNumber: new FormControl()
    });
  }
  //Generate random number, between 2 user-chosen intervals. Refer to other component for math.floor and math.random
  getIntervalNum(form: FormGroup){
    this.intervalNum = Math.floor(Math.random() * (form.value.lastNumber - form.value.firstNumber + 1)) + form.value.firstNumber;
  }
  clearNumGenForm(form: FormGroup){
    form.reset();
    this.intervalNum = 0;
  }
}
