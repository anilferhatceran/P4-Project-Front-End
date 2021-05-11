import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Password-gen',
  templateUrl: './Password-gen.component.html',
  styleUrls: ['./Password-gen.component.css']
})
export class PasswordGenComponent implements OnInit {
  passGenForm:any;
  passGeneratorTestForm: any; // <----- Also from PASSWORD GENERATOR TEST
  ranNumbers:number = 0;
  ranWordsLowcase:string = "";
  ranWordsUppercase:string = "";

  constructor() { }

  ngOnInit() {
    this.passGenForm = new FormGroup({
      passWord: new FormControl(''),
    
    });


    // PASSWORD GENERATOR TESTING FROM HERE AND DOWN.
    this.passGeneratorTestForm = new FormGroup({
      row_password: new FormControl(),
    });
    }

    randomPassword(length:number) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}
generate(form:FormGroup) {
    form.value.row_password = this.randomPassword(form.value.length);
}
}
