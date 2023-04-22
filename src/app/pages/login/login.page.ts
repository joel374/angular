import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GoogleAuthProvider } from 'firebase/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// import { AuthActions } from 'src/app/store/store.module';
import { loginSuccess } from '../../store/actions/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [
    { provide: AngularFireAuth, useClass: AngularFireAuth },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
})
export class LoginPage implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  formData = {
    email: '',
    password: '',
  };

  onSubmit = (form: NgForm) => {
    console.log('Form :', form.value);
  };

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);

    await this.http.post(`${environment.apiBaseUrl}/user/login`, {
      username: credential.user?.displayName,
      email: credential.user?.email,
    });

    this.store.dispatch(
      loginSuccess({
        displayName: credential.user?.displayName,
        email: credential.user?.email,
      })
    );

    this.router.navigateByUrl('/');
    let refreshToken: any = credential?.user?.refreshToken;
    localStorage.setItem('auth_token', refreshToken);
  }

  ngOnInit() {}
}
