import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage implements OnInit {
  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  formData = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit = (form: NgForm) => {
    const formData = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
    };
    this.http.post('http://localhost:8000/auth/register', formData).subscribe(
      (response) => {
        console.log('Form submitted successfully!', response);
        this.presentToast('Form submitted successfully!');
      },
      (error) => {
        console.error('Error submitting form!', error);
      }
    );
  };

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }
  ngOnInit() {}
}
