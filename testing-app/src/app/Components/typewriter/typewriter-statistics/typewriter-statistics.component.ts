import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter-statistics',
  templateUrl: './typewriter-statistics.component.html',
  styleUrls: ['./typewriter-statistics.component.css']
})
export class TypewriterStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("hi from child");

  }

}
