import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-WebReviewCheck',
  templateUrl: './WebReviewCheck.component.html',
  styleUrls: ['./WebReviewCheck.component.css']
})
export class WebReviewCheckComponent implements OnInit {
  websiteForm:any;
  constructor() { }

  ngOnInit() {
    this.websiteForm = new FormGroup({
      trustsite: new FormControl(),
    })
  }

}
