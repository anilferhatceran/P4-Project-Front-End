import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Password-gen',
  templateUrl: './Password-gen.component.html',
  styleUrls: ['./Password-gen.component.css']
})
export class PasswordGenComponent implements OnInit {

  constructor() { }
  passGenForm:any;
  passLengthForm: any;
  displayedPass: any;

  ngOnInit() {
    this.passGenForm = new FormGroup({
      password: new FormControl(),
      passLength: new FormControl(),
    });
    }
    randomPassword() {

    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < this.passGenForm.value.passLength; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    if(this.passGenForm.value.passLength < 8){
      alert("Password has to be atleast 8 characters long!");
      this.passGenForm.reset();
    }
    else if(this.passGenForm.value.passLength > 8 && this.passGenForm.value.passLength <= 275 ){
      this.displayedPass = pass;
    }
    else if(this.passGenForm.value.passLength > 275){
      alert("Maximum amount of characters exceeded!");
      this.passGenForm.reset();
    }

  }
}
