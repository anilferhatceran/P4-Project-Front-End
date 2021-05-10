import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Password-gen',
  templateUrl: './Password-gen.component.html',
  styleUrls: ['./Password-gen.component.css']
})
export class PasswordGenComponent implements OnInit {
  passGenForm:any;
  ranNumbers:number = 0;
  ranWordsLowcase:string = "";
  ranWordsUppercase:string = "";

  constructor() { }

  ngOnInit() {
    this.passGenForm = new FormGroup({
      passWord: new FormControl(''),

    });
  }

}
