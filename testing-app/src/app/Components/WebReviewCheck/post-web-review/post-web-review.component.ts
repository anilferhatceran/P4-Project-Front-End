import { HttpService } from 'src/app/service/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { WebReviewCheckComponent } from '../WebReviewCheck.component';

@Component({
  selector: 'app-post-web-review',
  templateUrl: './post-web-review.component.html',
  styleUrls: ['./post-web-review.component.css']
})



export class PostWebReviewComponent implements OnInit {

  postReviewForm: FormGroup;
  // @Input() reviewTitle = '';
  // @Input() reviewUser = 0;
  // @Input() reviewText = '';
  // @Input() reviewRating = '';
  // @Input() reviewDate = '';

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.postReviewForm = new FormGroup({
      companyUrl: new FormControl(),
      companyName: new FormControl(),
      companyTitle: new FormControl(),
      companyDesc: new FormControl(),
    })
  }

  postReview(){
    this.service.postReview(this.postReviewForm.value).subscribe(review => console.log(review));

  }
  tryAgain(){
    window.location.reload();
  }

}
