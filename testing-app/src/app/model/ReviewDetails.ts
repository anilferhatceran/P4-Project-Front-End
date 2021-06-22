import { Users } from './Users';
import { CompanyProfiles } from "./CompanyProfiles";

export interface ReviewDetails {
  reviewID:number;
  company:CompanyProfiles;
  user:Users;
  reviewTitle:string;
  reviewText:string;
  reviewDate:string;
  reviewRating:number;




}
