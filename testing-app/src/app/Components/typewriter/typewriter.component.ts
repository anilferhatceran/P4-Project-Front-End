import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  word:TextsGenerated[];



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

      this.service.getWordsAmount(30).subscribe(words => {
        this.word = words;

      });
    }
    else if(this.fastCheck && this.veryFastCheck === false && this.neutralCheck === false && this.slowCheck === false){
      console.log('Fast Mode');
    }
    else if(this.neutralCheck && this.veryFastCheck === false && this.fastCheck === false && this.slowCheck === false){
      console.log('Neutral Mode');
    }
    else if(this.slowCheck && this.veryFastCheck === false && this.fastCheck === false && this.neutralCheck === false){
      console.log('Slow Mode');
    }
  }

  startTypingSession(event:any){
    console.log("test");

  }

}
