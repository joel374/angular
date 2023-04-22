import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MenuCardComponent } from 'src/app/components/menu-card/menu-card.component';
import { Url } from 'url';
import { environment } from 'src/environments/environment';
// import {
//   selectAuthDisplayName,
//   selectAuthEmail,
// } from 'src/app/store/store.module';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuCardComponent],
})
export class HomePage implements OnInit {
  menus: {
    food_name: string;
    price: string;
    Images: {
      image_url: string;
    }[];
    image_url: string;
  }[] = [];

  Image: {
    image_url: Url;
  }[] = [];

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit() {
    this.http.get(`${environment.apiBaseUrl}/menu`).subscribe((data: any) => {
      this.menus = data.data;
      console.log('menu', this.menus);
    });
  }
}
