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

    randomPassword(length:any) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}
generate(form:FormGroup) {
    console.log(this.randomPassword(50))  // Den bliver registret i loggen i F12 konsol(husk at trykke på knappen når du er i konsol), men den bliver ikke output i selve tekstboksen og ved ikke hvorfor
    var value = this.randomPassword(50)
    this.passGeneratorTestForm.row_password = this.randomPassword(form.value.length);
}

// generate(form:FormGroup) {
//   console.log(form.value.row_password);
//     form.value.row_password = this.randomPassword(form.value.length);
// }
// generate(form:FormGroup) {
//   var value = this.randomPassword(50)
//    this.passGeneratorTestForm.row_password = value;

// }
}
