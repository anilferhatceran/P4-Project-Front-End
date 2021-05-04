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
  randomNum:number = 0;

  constructor() {

  }



  ngOnInit() {
    this.numberGenForm = new FormGroup({
      firstNumber: new FormControl(),
      lastNumber: new FormControl()
    });
  }

  getIntervalNum(form: FormGroup){
    this.intervalNum = Math.floor(Math.random() * (form.value.lastNumber - form.value.firstNumber + 1)) + form.value.firstNumber;
  }
  clearNumGenForm(form: FormGroup){
    form.reset();
    this.intervalNum = 0;
  }
  // getRandomNum(min:number,max:number){
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   this.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  //   console.log(this.randomNum);

  // }
}
