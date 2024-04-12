import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  signup() {
    // Add logic to create a new user with email and password
    console.log('Signing up...');
  }
}
