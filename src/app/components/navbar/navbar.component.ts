import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(user => {
      this.user = user;
    })
  }

  lougout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch(err => console.log(err));
  }
}
