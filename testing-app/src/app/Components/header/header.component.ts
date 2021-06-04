import { CommonResponse } from './../../model/CommonResponse';
import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: Users[];
  confirmPass: any;
  @Input() user: Users;
  userObj: Users = {userID: 0,userEmail: "", passwordHash: ""}
  userChecked: boolean = true;

  public loginError:String;
  constructor(private http:HttpClient, private service:HttpService) { }

  //Validators for createUserForm: Email, and Password required.
  createUserForm = new FormGroup(
    {
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      passwordHash: new FormControl(''),
    }
  );
  loginUserForm = new FormGroup(
    {
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      passwordHash: new FormControl('', [Validators.required]),
    }
  );

  ngOnInit() {
  }

  //create user function on click.
  onSubmitCreate(){

    this.confirmPass = document.getElementById("confirmAccPass") as HTMLInputElement;



    if (this.confirmPass.value == this.createUserForm.value.passwordHash){
      console.log('Test');


      // If the email and password is confirmed. The program will tell the user that the account is created.
      if (this.createUserForm.value.passwordHash.length >= 8 && this.createUserForm.value.userEmail != null){
      alert("User created");

      this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));
      }
      else{
        //If the email is incorrect the program will tell user that the user need the email.
        if(this.createUserForm.value.userEmail.length < 1){
          alert("You need your Email");
        }
        else{
          //If user inputs a password under 8 characters. The program will tell user that the password needs to be 8 characters.
          alert("Password needs to be atleast 8 characters long");
        }
      }



  }
  else{
    //If the user don't write the same password, program will tell user that it must be the same.
    alert("Password must be the same!");
  }


}
onSubmitLogin(){


  this.userObj.userEmail = this.loginUserForm.value.userEmail;
  this.userObj.passwordHash = this.loginUserForm.value.passwordHash;

  var user = this.users.filter(u => u.userEmail == this.loginUserForm.value.userEmail && u.passwordHash == this.loginUserForm.value.passwordHash);

  if(user.length == 0){
    alert("Wrong email or password");
    this.userChecked = false;
  }
  else if(user.length == 1){
    this.userChecked = true;
    this.service.ValidateUser(this.userObj).subscribe();
    this.loginUserForm.reset();
    localStorage.setItem('User','Logged In');
    alert("You are now logged in!");
    this.userChecked = false;
  }
}
onSubmitLogout(){
  if(localStorage.getItem('User')){
    window.localStorage.clear();
    window.location.reload();
  }
}
}
