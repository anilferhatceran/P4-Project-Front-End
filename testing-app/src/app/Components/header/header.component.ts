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
    this.service.postUser(this.createUserForm.value).subscribe(user => console.log(user));

  }
  // tslint:disable-next-line: typedef
  onSubmitLogin(){
    // tslint:disable-next-line: deprecation
    this.service.getUser().subscribe(user => console.log(user));

  }

}
