import { Component, Input, OnInit } from '@angular/core';
import { TypewriterComponent } from '../typewriter.component';

@Component({
  selector: 'app-typewriter-statistics',
  templateUrl: './typewriter-statistics.component.html',
  styleUrls: ['./typewriter-statistics.component.css']
})
export class TypewriterStatisticsComponent implements OnInit {
  @Input() displayAcc = 0;
  @Input() displayTime = 0;
  @Input() displayCorrectChar = 0;
  @Input() displayIncorrectChar = 0;
  @Input() displayWordsPerMin = 0;

  loadMain: string = "/src/app/Components/typewriter/typewriter.component.html";
  constructor() { }
  ngOnInit() {
  }
  tryAgain(){
    window.location.reload();
  }
}
