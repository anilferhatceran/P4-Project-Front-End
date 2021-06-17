import { Component, Input, OnInit } from '@angular/core';
import { TypewriterComponent } from '../typewriter.component';

@Component({
  selector: 'app-typewriter-statistics',
  templateUrl: './typewriter-statistics.component.html',
  styleUrls: ['./typewriter-statistics.component.css']
})
export class TypewriterStatisticsComponent implements OnInit {

  @Input() displayAcc = 0;

  constructor() { }

  ngOnInit() {
    console.log("Hi from child");



  }


  displayStatistics(){

  }
}
