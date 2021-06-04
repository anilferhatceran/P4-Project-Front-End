import { TestBed } from '@angular/core/testing';
import { NamesGenerated } from './../../model/Names';
import { HttpService } from 'src/app/service/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css']
})
export class NameGenComponent implements OnInit {
  nameGenForm:any;
  ranName: string = "";
  generatedMaleNames: NamesGenerated;
  generatedFemaleNames: NamesGenerated;
  maleNameChoice:boolean = true;
  femaleNameChoice:boolean = true;
  testName: string = '';
  testNameTest: number;
  namesArray: string[];
  maleName: any;
  femaleName: any;
  newStr: any;
  newStr2: any;
  saveNameForm: FormGroup;
  firstName: any;
  secondName: any;
  thirdName: any;
  fourthName: any;
  fifthName: any;



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
  }

  getNames(){
  //get names function, chooses between user chosen male or female name

  this.maleName = document.getElementById("maleNameChoiceID") as HTMLInputElement;
  this.maleNameChoice = this.maleName.checked;

  this.femaleName = document.getElementById("femaleNameChoiceID") as HTMLInputElement;
  this.femaleNameChoice = this.femaleName.checked;

  if(this.maleNameChoice && this.femaleNameChoice == false){

    //gets given amount (our example: 5) names from service.
    this.service.getMaleNamesAmount(5).subscribe(names => { //if male or female choice box is ticked off
      this.generatedMaleNames = names;

    });

    this.testName = JSON.stringify(this.generatedMaleNames);

    //split string names into array and remove
    this.namesArray = this.testName.split(',');
    let re = /",/gi;
    let reTwo = /"/gi;

    this.newStr = this.namesArray.toString().replace(re,"\n");
    this.newStr2 = this.newStr.toString().replace(reTwo,"").replace('[',"").replace(']',"").split('\n');
  }
  else if(this.maleNameChoice == false && this.femaleNameChoice){
    this.service.getFemaleNamesAmount(5).subscribe(names => {
      this.generatedFemaleNames = names;
    });
    this.testName = JSON.stringify(this.generatedFemaleNames);


    this.namesArray = this.testName.split(',');
    let re = /",/gi;
    let reTwo = /"/gi;

    this.newStr = this.namesArray.toString().replace(re,"\n");
    this.newStr2 = this.newStr.toString().replace(reTwo,"").replace('[',"").replace(']',"").split('\n');

  }
  else{
    alert("Please choose either female or male");
  }


  }

  //Function that should save the individual names and then POST them to the database.
  //However as of now the POST and database part of this program does not work. This code is unfinished.

  //TO-DO: Create a link with the newly updated database and post the names to the new table.
  //       Work on a new Controller on the Web API.
  postName(){
    this.firstName = document.getElementById("first-name") as HTMLInputElement;
    this.secondName = document.getElementById("second-name") as HTMLInputElement;
    this.thirdName = document.getElementById("third-name") as HTMLInputElement;
    this.fourthName = document.getElementById("fourth-name") as HTMLInputElement;
    this.fifthName = document.getElementById("fifth-name") as HTMLInputElement;

    if(localStorage.getItem('User')){
      if(this.firstName != null)
      {
        this.service.postName(this.firstName).subscribe(name => console.log(name));
      }
      else if(this.secondName != null){
        this.service.postName(this.secondName).subscribe(name => console.log(name));
      }
      else if(this.thirdName != null){
        this.service.postName(this.thirdName).subscribe(name => console.log(name));
      }
      else if(this.fourthName != null){
        this.service.postName(this.fourthName).subscribe(name => console.log(name));
      }
      else if(this.fifthName != null){
        this.service.postName(this.fifthName).subscribe(name => console.log(name));
      }
    }
    else{
      alert("You need to be logged in to use this function!");
    }

  }

}
