import { ReviewDetails } from './../../model/ReviewDetails';
import { CompanyProfiles } from './../../model/CompanyProfiles';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';


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

  constructor(private service : HttpService) { }

  ngOnInit() {
    this.websiteForm = new FormGroup({
      trustsite: new FormControl(),
    })

  }

  getReviewsByUrl(){

    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value;


      this.service.getReviewByUrl(this.websiteURL).subscribe(url => {
        this.displayURLData = url;

        if (this.displayURLData.length < 1){
          this.reviewFound = false;
        }
        else{
          this.reviewFound = true;
        }

      //  console.log(this.displayURLData[0].company.companyName);
      })


  }
  getAverageRating(){
    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value;
    this.service.getAvrgRating(this.websiteURL).subscribe(ratings => {
      this.avrgRatings = ratings;
})

  }

  getTotalRating(){
    this.websiteURL = (document.getElementById("userURL") as HTMLInputElement).value;
    this.service.getAvrgRating(this.websiteURL).subscribe(ratings => {
      this.totalRating = ratings;
    console.log(this.totalRating);

    })

  }

}
