import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  nameControl = new FormControl (null, [Validators.required,
  Validators.minLength (2)]);
  surnameControl = new FormControl ();
  emailControl = new FormControl ();
  passwordControl = new FormControl ();

  userForm = new FormGroup({
    name : this.nameControl,
    surname : this.surnameControl,
    email : this.emailControl,
    password : this.passwordControl

  });
}

