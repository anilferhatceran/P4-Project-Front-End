import { ReviewDetails } from './../../model/ReviewDetails';
import { CompanyProfiles } from './../../model/CompanyProfiles';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PostWebReviewComponent } from './post-web-review/post-web-review.component';


@Component({
  selector: 'app-WebReviewCheck',
  templateUrl: './WebReviewCheck.component.html',
  styleUrls: ['./WebReviewCheck.component.css']
})
export class WebReviewCheckComponent implements OnInit {
  websiteForm:any;
  showPostReviewForm: boolean = false;
  showReviews: ReviewDetails[] = [];
  @Input() reviews:ReviewDetails;
  websiteURL: string;
  displayURLData: ReviewDetails[];
  displayURLDataStr: string;

  reviewFound: boolean = true;
  avrgRatings: number;
  totalRating: number;

  ratingScore: string;
  postFormsWindow: string = "/testing-app/src/app/Components/WebReviewCheck/post-web-review/post-web-review.component.html";

  constructor(private service : HttpService) { }

  ngOnInit() {
    this.websiteForm = new FormGroup({
      trustsite: new FormControl(),
    })

  }

  getReviewsByUrl(){ //function to get our reviews depending on written URL.

    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value; //value is retrieved from ID: input field and URL gets rendered.

      this.service.getReviewByUrl(this.websiteURL).subscribe(url => {
        this.displayURLData = url;

        if (this.displayURLData.length < 1){
          this.reviewFound = false;
        }
        else{
          this.reviewFound = true;
        }
      })
  }
  getAverageRating(){ //a service which we GET the average ratings of all the combined ratings from chosen URL.
    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value;
    this.service.getAvrgRating(this.websiteURL).subscribe(ratings => {
      this.avrgRatings = ratings;
    })

  }

  getTotalRating(){ //a service which gives us the total number of ratings for a given URL.
    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value;
    this.service.getTotalRatings(this.websiteURL).subscribe(ratings => {
      this.totalRating = ratings;
    })

  }

  ratingScale(){ //Rating scale, rates based on good of a rating a company has.
    if(this.avrgRatings = 1){
      this.ratingScore = "very bad";
    }

    else if(this.avrgRatings = 2){
      this.ratingScore = "bad";
    }

    else if(this.avrgRatings = 3){
      this.ratingScore = "average";
    }

    else if(this.avrgRatings = 4){
      this.ratingScore = "good";
    }

    else if(this.avrgRatings = 5){
      this.ratingScore = "very good";
    }
  }
  loadPostForms(){
    this.showPostReviewForm = true;
  }

}
