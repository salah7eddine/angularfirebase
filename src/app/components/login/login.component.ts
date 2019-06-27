import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.user).then(res => {
      this.flashMessage.show('Wlecome to you Account !', {
        cssClass: 'alert-info',
        timeout: 3000
      });
      this.router.navigate(['/products']);
    }).catch(err => {
      this.flashMessage.show(err.message, {
        cssClass: 'alert-warning',
        timeout: 5000
      });
    })
  }

  signInwithGoogle() {
    this.authService.loginWithGoogle().then(res => {
      this.flashMessage.show('Wlecome to you Account !', {
        cssClass: 'alert-info',
        timeout: 3000
      });
      this.router.navigate(['/products']);
    }).catch(err => {
      this.flashMessage.show(err.message, {
        cssClass: 'alert-warning',
        timeout: 5000
      });
    });
  }

}
