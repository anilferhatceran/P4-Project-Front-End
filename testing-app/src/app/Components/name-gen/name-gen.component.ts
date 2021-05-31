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


  this.maleName = document.getElementById("maleNameChoiceID") as HTMLInputElement;
  this.maleNameChoice = this.maleName.checked;

  this.femaleName = document.getElementById("femaleNameChoiceID") as HTMLInputElement;
  this.femaleNameChoice = this.femaleName.checked;

  if(this.maleNameChoice && this.femaleNameChoice == false){

    this.service.getMaleNamesAmount(5).subscribe(names => {
      this.generatedMaleNames = names;

    });

    this.testName = JSON.stringify(this.generatedMaleNames);


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


}
