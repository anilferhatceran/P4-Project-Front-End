import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReviewDetails } from 'src/app/model/ReviewDetails';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-web-review',
  templateUrl: './add-web-review.component.html',
  styleUrls: ['./add-web-review.component.css']
})
export class AddWebReviewComponent implements OnInit {

  addReviewForm: FormGroup;

  constructor(private service: HttpService) { }

  ngOnInit() {

    this.addReviewForm = new FormGroup({
      companyName: new FormControl(''),
      companyURL: new FormControl(''),
      reviewTitle: new FormControl(''),
      reviewText: new FormControl(''),
      reviewDate: new FormControl(''),
      reviewRating: new FormControl(),
    })
  }

  tryAgain(){
    window.location.reload();
  }

  addReview(){
    var placeholder = localStorage.getItem('User'); //post review function

    var userId = placeholder == null ? 0 : parseInt(placeholder);

    let review: ReviewDetails = {reviewID: 0, company: {companyID: 0,companyName: this.addReviewForm.value.companyName, companyURL: this.addReviewForm.value.companyURL}, //review interface
    user: {userID: userId, userEmail: '', passwordHash: ''},
    reviewTitle: this.addReviewForm.value.reviewTitle, reviewText: this.addReviewForm.value.reviewText,
    reviewDate: this.addReviewForm.value.reviewDate, reviewRating: this.addReviewForm.value.reviewRating};

    this.service.postReview(review).subscribe(review => console.log(review));

  }


}
