import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-name-gen',
  templateUrl: './name-gen.component.html',
  styleUrls: ['./name-gen.component.css']
})
export class NameGenComponent implements OnInit {
  nameGenForm:any;
  ranName:string = "";

  constructor() { }

  ngOnInit() {
    this.nameGenForm = new FormGroup({
      ranGenName: new FormControl(),

    })
  }

  randomName(){

  }

}
