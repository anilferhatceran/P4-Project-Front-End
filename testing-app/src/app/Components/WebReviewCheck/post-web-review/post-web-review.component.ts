import { Component, Input, OnInit } from '@angular/core';
import { WebReviewCheckComponent } from '../WebReviewCheck.component';

@Component({
  selector: 'app-post-web-review',
  templateUrl: './post-web-review.component.html',
  styleUrls: ['./post-web-review.component.css']
})



export class PostWebReviewComponent implements OnInit {

  loadMain: string = "/testing-app/src/app/Components/WebReviewCheck/WebReviewCheck.component.html";


  @Input() reviewTitle = '';
  @Input() reviewUser = 0;
  @Input() reviewText = '';
  @Input() reviewRating = '';
  @Input() reviewDate = '';

  constructor() { }

  ngOnInit() {
  }
  tryAgain(){
    window.location.reload();
  }

}
