import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter-statistics',
  templateUrl: './typewriter-statistics.component.html',
  styleUrls: ['./typewriter-statistics.component.css']
})
export class TypewriterStatisticsComponent implements OnInit {

  @Input() displayAcc: number;

  constructor() { }

  ngOnInit() {
    console.log("Hi from child");



  }


  displayStatistics(){

  }
}
