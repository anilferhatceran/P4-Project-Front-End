import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  count:number;
  words:TextsGenerated;
  index:number;
  textWord:string = "";
  typedWords:string ="";
  text: any;
  userInput: string ="";
  values = '';
  word: TextsGenerated;






  constructor(private http:HttpClient, private service:HttpService) { }

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

      this.service.getWordsAmount(40).subscribe(words => {
        this.words = words;

        //below code is for future use for letter by letter detection **REFER TO THIS***

        // // this.typedWords = words.toString();
        // for(let i = 0; i < this.word.length; i++){

        //   this.typedWords = (" "+ this.text.word[i]);
        // }
        // console.log(this.word);


      });
    }
    else if(this.fastCheck && this.veryFastCheck === false && this.neutralCheck === false && this.slowCheck === false){
      this.service.getWordsAmount(40).subscribe(word => {
        this.words = word;
        this.typedWords = word.toString();
        for(let i = 0; i < this.typedWords.length; i++){

          this.typedWords = (" "+ this.text.word[i]);
        }
        console.log(this.word);


      });
    }
    else if(this.neutralCheck && this.veryFastCheck === false && this.fastCheck === false && this.slowCheck === false){
      this.service.getWordsAmount(40).subscribe(words => {
        this.words = words;
        // // this.typedWords = words.toString();
        // for(let i = 0; i < this.word.length; i++){

        //   this.typedWords = (" "+ this.text.word[i]);
        // }
        // console.log(this.word);


      });
    }
    else if(this.slowCheck && this.veryFastCheck === false && this.fastCheck === false && this.neutralCheck === false){
      this.service.getWordsAmount(40).subscribe(words => {
        this.words = words;
        // // this.typedWords = words.toString();
        // for(let i = 0; i < this.word.length; i++){

        //   this.typedWords = (" "+ this.text.word[i]);
        // }
        // console.log(this.word);


      });
    }
  }

  onKeyDown(event: any) {
    // let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // let alphabetUpper = alphabet.map(function(x){return x.toUpperCase(); })

    //If "backspace" detected remove last character in given string.
    if (event.key == "Backspace"){
     this.userInput = this.userInput.substring(0,this.userInput.length-1)
    }
    else if(event.key == "a"  || event.key == "b" || event.key == "c" || event.key == "d" || event.key == "e" || event.key == "f" || event.key == "g" || event.key == "h"
    || event.key == "i" || event.key == "j" || event.key == "k" ||event.key == "l" ||event.key == "m" ||event.key == "n" ||event.key == "o" ||event.key == "p"
    ||event.key == "q" ||event.key == "r" ||event.key == "s" ||event.key == "u" ||event.key == "v" ||event.key == "x" ||event.key == "y" ||event.key == "z"
    ||event.key == "æ" ||event.key == "ø" ||event.key == "å" ||event.key == "-" ||event.key == "A"  || event.key == "B" || event.key == "C" || event.key == "D"
    || event.key == "E" || event.key == "F" || event.key == "G" || event.key == "H" || event.key == "I" || event.key == "J" || event.key == "K" ||event.key == "L"
    ||event.key == "M" ||event.key == "N" ||event.key == "O" ||event.key == "P" ||event.key == "Q" ||event.key == "R" ||event.key == "S" ||event.key == "U"
    ||event.key == "V" ||event.key == "X" ||event.key == "Y" ||event.key == "Z" ||event.key == "Æ" ||event.key == "Ø" ||event.key == "Å" || event.key == ","
    || event.key == "." || event.key == " ") {

     this.userInput = this.userInput + event.key;
    } //if everything other than space and those given letters is pressed, it wont register a key pressed.
    else{

    }


  }


}


