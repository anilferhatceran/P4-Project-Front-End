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
  ranName:string = "";
  maleNames: NamesGenerated;

  constructor(private service : HttpService) { }

  ngOnInit() {
    this.nameGenForm = new FormGroup({
      ranGenName: new FormControl(),

    })
  }
  randomGenName = '';
  genName = '';

getMaleName(){

  this.service.getMaleNamesAmount(5).subscribe(names => {
    this.maleNames = names;


  });
  }


}
