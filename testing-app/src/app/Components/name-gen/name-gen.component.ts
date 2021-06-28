import { NameGenUsers } from './../../model/NameGenUsers';
import { TestBed } from '@angular/core/testing';
import { NamesGenerated } from './../../model/Names';
import { HttpService } from 'src/app/service/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Button } from 'protractor';


@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css']
})
export class NameGenComponent implements OnInit{
  namesAndUsers:NameGenUsers[] = [];
  generatedMaleNames: string[] = [];
  generatedFemaleNames: string[] = [];
  namesArray: string[];
  displaySavedNames: NameGenUsers[];
  newStr2: string[] = [];

  newStr: string;

  stringGeneratedMaleNames: string = '';
  stringGeneratedFemaleNames: string;

  maleName: HTMLInputElement;
  femaleName: HTMLInputElement;

  maleNameChoice:boolean = true;
  femaleNameChoice:boolean = true;

  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: string;
  fifthName: string;

  nameGenForm: FormGroup;
  saveNameForm: FormGroup;


  constructor(private service : HttpService) { }

  ngOnInit() {
    this.nameGenForm = new FormGroup({
      femaleNameChoice: new FormControl(),
      maleNameChoice: new FormControl(),
    }),
    this.saveNameForm = new FormGroup({
      femaleNameSave: new FormControl(),
      maleNameSave: new FormControl(),
    })
    this.service.getNames().subscribe(names =>{
      this.namesAndUsers = names;
    })
    this.getSavedNames();
  }
  getNames(){
  //get namesAndUsers function, chooses between user chosen male or female name

  this.maleName = document.getElementById("maleNameChoiceID") as HTMLInputElement;
  this.maleNameChoice = this.maleName.checked;

  this.femaleName = document.getElementById("femaleNameChoiceID") as HTMLInputElement;
  this.femaleNameChoice = this.femaleName.checked;

  if(this.maleNameChoice && this.femaleNameChoice == false){

    //gets given amount (our example: 5) namesAndUsers from service.
    this.service.getMaleNamesAmount(5).subscribe(namesAndUsers => { //if male or female choice box is ticked off
      this.generatedMaleNames = namesAndUsers;
      this.generatedFemaleNames = [];
      //convert json object to string and clean up string to which we get namesAndUsers only without special chars
    //and string to array for print.

    this.stringGeneratedMaleNames = JSON.stringify(this.generatedMaleNames);

    this.namesArray = this.stringGeneratedMaleNames.split(',');
    let re = /",/gi;
    let reTwo = /"/gi;

    this.newStr = this.namesArray.toString().replace(re,"\n");
    this.newStr2 = this.newStr.toString().replace(reTwo,"").replace('[',"").replace(']',"").split('\n');
    });
  }
  else if(this.maleNameChoice == false && this.femaleNameChoice){
    this.service.getFemaleNamesAmount(5).subscribe(namesAndUsers => {
      this.generatedFemaleNames = namesAndUsers;
      this.generatedMaleNames = [];

    //convert json object to string and clean up string to which we get namesAndUsers only without special chars
    //and string to array for print.

    this.stringGeneratedFemaleNames = JSON.stringify(this.generatedFemaleNames);

    this.namesArray = this.stringGeneratedFemaleNames.split(',');
    let re = /",/gi;
    let reTwo = /"/gi;

    this.newStr = this.namesArray.toString().replace(re,"\n");
    this.newStr2 = this.newStr.toString().replace(reTwo,"").replace('[',"").replace(']',"").split('\n');
    });
  }
  else{
    alert("Please choose either female or male");
  }
  }

  //Function that should save the individual namesAndUsers and then POST them to the database.
  //However as of now the POST and database part of this program does not work. This code is unfinished.

  //TO-DO: Create a link with the newly updated database and post the namesAndUsers to the new table.
  //       Work on a new Controller on the Web API.
  postName(button:string){
    this.firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    this.secondName = (document.getElementById("second-name") as HTMLInputElement).value;
    this.thirdName = (document.getElementById("third-name") as HTMLInputElement).value;
    this.fourthName = (document.getElementById("fourth-name") as HTMLInputElement).value;
    this.fifthName = (document.getElementById("fifth-name") as HTMLInputElement).value;

    var placeholder = localStorage.getItem('User');

    var userId = placeholder == null ? 0 : parseInt(placeholder);

    var nameGenUsers: NameGenUsers = {nameGenUserID: 0, name: {nameGenID: 0, maleNames: '', femaleNames: ''}, user: {userID: userId, userEmail: '', passwordHash: ''}};

    //Created a button: string paramter that I can set in each if/else if, so that I can match the value of the button string
    //with the buttons in HTML. This way I can check which button has been pressed and therefore I can save the corresponding name.

    //TO-DO:
    //Create an else if(button == 'all') which will save all the namesAndUsers. Find out if possible/how much trouble it is. If not worth the time,
    //then remove "Save All Names" function
    // :: Make a FOR loop that POSTs 5 times? ::

    if(this.generatedMaleNames.length != 0){

      if (button == 'first'){
        nameGenUsers.name.maleNames = this.firstName;
      }
      else if(button == 'second'){
        nameGenUsers.name.maleNames = this.secondName;

      }
      else if(button == 'third'){
        nameGenUsers.name.maleNames = this.thirdName;

      }
      else if(button == 'fourth'){
        nameGenUsers.name.maleNames = this.fourthName;

      }
      else if(button == 'fifth'){
        nameGenUsers.name.maleNames = this.fifthName;
      }
    }

    else{
      if (button == 'first'){
        nameGenUsers.name.femaleNames = this.firstName;
      }
      else if(button == 'second'){
        nameGenUsers.name.femaleNames = this.secondName;
      }
      else if(button == 'third'){
        nameGenUsers.name.femaleNames = this.thirdName;
      }
      else if(button == 'fourth'){
        nameGenUsers.name.femaleNames = this.fourthName;
      }
      else if(button == 'fifth'){
        nameGenUsers.name.femaleNames = this.fifthName;
      }
    }
    if(userId){
      if(this.firstName != null)
      {
        this.service.postName(nameGenUsers).subscribe(name => console.log(name));
      }
      else if(this.secondName != null){
        this.service.postName(nameGenUsers).subscribe(name => console.log(name));
      }
      else if(this.thirdName != null){
        this.service.postName(nameGenUsers).subscribe(name => console.log(name));
      }
      else if(this.fourthName != null){
        this.service.postName(nameGenUsers).subscribe(name => console.log(name));
      }
      else if(this.fifthName != null){
        this.service.postName(nameGenUsers).subscribe(name => console.log(name));
      }
    }
    else{
      alert("You need to be logged in to use this function!");
    }
  }
  getSavedNames(){
    var placeholder = localStorage.getItem('User');
    var userId = placeholder == null ? 0 : parseInt(placeholder);
    var nameGenUsers: NameGenUsers = {nameGenUserID: 0, name: {nameGenID: 0, maleNames: '', femaleNames: ''}, user: {userID: userId, userEmail: '', passwordHash: ''}};

    if(userId == nameGenUsers.user.userID){
      this.service.getLastTenNames(userId).subscribe(user => {
        this.displaySavedNames = user
      });
    }
  }

}
