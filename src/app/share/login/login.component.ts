import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideMenu', [
      state(
        'false',
        style({
          transform: 'translateX(250px)',
          opacity: 0,
          display: 'none',
        })
      ),
      state(
        'true',
        style({
          transform: 'translateX(0)',
          opacity: 1,
          display: 'block',
        })
      ),
      transition('true <=> false', animate('400ms ease-in-out')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  isUsedLogin: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  loginTab() {
    this.isUsedLogin = true;
    console.log(this.isUsedLogin);
  }

  signUpTab() {
    this.isUsedLogin = false;
    console.log(this.isUsedLogin);
  }
}
