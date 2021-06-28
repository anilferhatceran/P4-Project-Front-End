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

  postCompanyForm: FormGroup;
  postReviewForm: FormGroup;
  // @Input() reviewTitle = '';
  // @Input() reviewUser = 0;
  // @Input() reviewText = '';
  // @Input() reviewRating = '';
  // @Input() reviewDate = '';

  constructor(private service: HttpService) { }

  ngOnInit() {
    this.postCompanyForm = new FormGroup({
      companyName: new FormControl(''),
      companyURL: new FormControl(''),
    })
    this.postReviewForm = new FormGroup({
      reviewTitle: new FormControl(''),
      reviewText: new FormControl(''),
      reviewDate: new FormControl(''),
      reviewRating: new FormControl(),
    })
  }

  // postReview(){
  //   this.service.postReview(this.postReviewForm.value).subscribe(review => console.log(review));
  //   console.log(this.postReviewForm.value);

  // }
  tryAgain(){
    window.location.reload();
  }
  postCompany(){
    console.log(this.postCompanyForm.value.companyName);

    this.service.postCompany(this.postCompanyForm.value).subscribe(company => console.log(company));
  }

}
