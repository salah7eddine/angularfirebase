import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


  register(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  isAuthenticated() {
    return this.afAuth.user;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
