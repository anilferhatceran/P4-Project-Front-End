import { Router } from '@angular/router';
import { TypewriterStatisticsComponent } from 'src/app/Components/typewriter/typewriter-statistics/typewriter-statistics.component';
import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { Form,FormControl, FormGroup } from '@angular/forms';
import { TextsGenerated } from 'src/app/model/Texts';


@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  typewriterTimeLimit: any;
  isChecked = true;
  veryFastCheck = true;
  fastCheck = true;
  neutralCheck = true;
  slowCheck = true;
  countCorrect:number = 0;
  countFail: number = 0;
  currentCount: number = 0;
  words:TextsGenerated;
  index:number;
  textWord:string = "";
  generatedWords:string =""
  text: any;
  userInput: string ="";
  values = '';
  textArray: string[];
  letterArray: string[];
  charsOfText: string;
  timeLeft: number;
  interval: any;
  isDisabled: boolean = false;
  correctChar: boolean = true;
  wrongChar = 'color: red !important;';
  totalTypedChars: number;
  failedCharAccuracy: number;
  charAccuracy: number;
  statisticsWindow: string = "/src/app/Components/typewriter/typewriter-statistics/typewriter-statistics.component.html";
  showStats: boolean = false;




  constructor(private http:HttpClient, private service:HttpService, private router:Router) { }

  ngOnInit() {
    this.typewriterTimeLimit = new FormGroup({
      veryFastTime: new FormControl(),
      fastTime: new FormControl(),
      neutralTime: new FormControl(),
      slowTime: new FormControl()
    });
  }

  isCheckedFunction(){
    let veryFast = document.getElementById('veryFastTimeID') as HTMLInputElement;
    this.veryFastCheck = veryFast.checked;

    let fast = document.getElementById('fastTimeID') as HTMLInputElement;
    this.fastCheck = fast.checked;

    let neutral = document.getElementById('neutralTimeID') as HTMLInputElement;
    this.neutralCheck = neutral.checked;

    let slow = document.getElementById('slowTimeID') as HTMLInputElement;
    this.slowCheck = slow.checked;

    if (this.veryFastCheck && this.fastCheck === false && this.neutralCheck === false && this.slowCheck === false){

      this.service.getWordsAmount(40).subscribe(word => {
        this.words = word;
        this.generatedWords = this.words.words.toString();
        this.charsOfText = this.generatedWords;
        console.log(this.charsOfText);
        this.startTimer(15);

      });
    }

    else if(this.fastCheck && this.veryFastCheck === false && this.neutralCheck === false && this.slowCheck === false){
      this.service.getWordsAmount(40).subscribe(word => {
        this.words = word;
        this.generatedWords = this.words.words.toString();
        this.charsOfText = this.generatedWords;
        console.log(this.charsOfText);
        this.startTimer(30);

      });

    }
    else if(this.neutralCheck && this.veryFastCheck === false && this.fastCheck === false && this.slowCheck === false){
      this.service.getWordsAmount(40).subscribe(word => {
        this.words = word;
        this.generatedWords = this.words.words.toString();
        this.charsOfText = this.generatedWords;
        console.log(this.charsOfText);
        this.startTimer(45);
      });

    }
    else if(this.slowCheck && this.veryFastCheck === false && this.fastCheck === false && this.neutralCheck === false){
      this.service.getWordsAmount(40).subscribe(word => {
        this.words = word;
        this.generatedWords = this.words.words.toString();
        this.charsOfText = this.generatedWords;
        console.log(this.charsOfText);

        this.startTimer(60);
      });

    }
  }


  startTimer(timeLeft: number) {
    this.timeLeft = timeLeft;
    this.interval = setInterval(() => {
      if(this.timeLeft  > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timeLeft)
        this.showStats = true;
        this.totalTypedChars = this.countCorrect + this.countFail;

        this.failedCharAccuracy = (this.countFail/this.totalTypedChars) * this.totalTypedChars;

        this.charAccuracy = 100 - this.failedCharAccuracy;
      }
    },1000)
  }
  loadStatistics(){
    window.open(this.statisticsWindow);
  }


  calculate(){

    //This is 100% of total typed chars, since we cannot guarantee that the user will type/finish the generated text fully.


    // alert("Accuray:"+this.charAccuracy+"%");

  }

  onKeyDown(event: any) {

    //If "backspace" detected remove last character in given string.
    if (event.key == "Backspace"){
    this.userInput = this.userInput.substring(0,this.userInput.length-1);
    this.currentCount--;
    }
    else if(event.key == "a"  || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || event.key == "f" || event.key == "g" || event.key == "h"
    || event.key == "i" || event.key == "j" || event.key == "k" ||event.key == "l" ||event.key == "m" ||event.key == "n" ||event.key == "o" ||event.key == "p"
    ||event.key == "q" ||event.key == "r" ||event.key == "s" ||event.key == "t" ||event.key == "u" ||event.key == "v" ||event.key == "w" ||event.key == "x" ||event.key == "y" ||event.key == "z"
    ||event.key == "-" ||event.key == "A"  || event.key == "B" || event.key == "C" || event.key == "D"
    || event.key == "E" || event.key == "F" || event.key == "G" || event.key == "H" || event.key == "I" || event.key == "J" || event.key == "K" ||event.key == "L"
    ||event.key == "M" ||event.key == "N" ||event.key == "O" ||event.key == "P" ||event.key == "Q" ||event.key == "R" ||event.key == "S" ||event.key == "T" ||event.key == "U"
    ||event.key == "V" ||event.key == "W" ||event.key == "X" ||event.key == "Y" ||event.key == "Z" || event.key == ","
    || event.key == "." || event.key == " " || event.key == "'") {



          if(event.key == this.charsOfText[this.currentCount]){
            this.countCorrect++;
            // console.log("Number of correct letters: "+this.countCorrect);
            console.log(this.correctChar);
            this.correctChar = true;

          }
          else{
            this.countFail++;
            // console.log("Number of incorrect letters: "+this.countFail);
            this.correctChar = false;

            console.log(this.correctChar);
          }
          this.currentCount++;
    }
    else{
    }
  }
}


