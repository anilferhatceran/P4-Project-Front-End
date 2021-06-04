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
  @Input() user: Users;
  userObj: Users = {userID: 0,userEmail: "", passwordHash: ""}
  userChecked: boolean = true;

  public loginError:String;
  constructor(private http:HttpClient, private service:HttpService) { }

  createUserForm = new FormGroup(
    {
      userEmail: new FormControl(''),
      passwordHash: new FormControl(''),
    }
  );
  loginUserForm = new FormGroup(
    {
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      passwordHash: new FormControl('', [Validators.required]),
    }
  );

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.service.getUser().subscribe(user => {
      this.users = user;
    },
    err => console.error(err),
    () => console.log(this.users)

    );
  }

  // tslint:disable-next-line: typedef
  onSubmitCreate(){
    console.log(this.createUserForm.value);

    // tslint:disable-next-line: deprecation
    // tslint:disable-next-line: deprecation

    if (this.createUserForm.value.passwordHash.length > 8 && this.createUserForm.value.userEmail != null){

      this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));
      alert("User created");
    }
    else {
      alert("Password needs to be atleast 8 characters long");

    }
  }
  // tslint:disable-next-line: typedef
  onSubmitLogin(){
    // tslint:disable-next-line: deprecation


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
