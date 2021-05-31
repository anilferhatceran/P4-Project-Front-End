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
  generatedMaleNames: NamesGenerated = {nameGenID:0, maleNames: '',femaleNames:''};
  generatedFemaleNames: NamesGenerated;
  maleNameChoice:boolean = true;
  femaleNameChoice:boolean = true;
  testName: string = '';
  splitOne: string[];
  maleName: any;
  femaleName: any;



  constructor(private service : HttpService) { }

  ngOnInit() {
    this.nameGenForm = new FormGroup({
      femaleNameChoice: new FormControl(),
      maleNameChoice: new FormControl(),

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

    // this.testName = JSON.stringify(this.generatedMaleNames);

    // // var reOne = /{/;
    // // var reTwo = /}/;

    // // this.splitOne = this.testName.split('{}":,',5);
    // // console.log(this.splitOne);
    // var charFind = this.testName.indexOf('{');

    // console.log(charFind);


    // // var sliced = this.testName.slice(3, -2);
    // // console.log(sliced);
    console.log(this.generatedMaleNames);


  }
  else if(this.maleNameChoice == false && this.femaleNameChoice){
    this.service.getFemaleNamesAmount(5).subscribe(names => {
      this.generatedFemaleNames = names;
    });
    console.log(this.generatedFemaleNames);

  }
  else{
    alert("Please choose either female or male");
  }


  }


}
