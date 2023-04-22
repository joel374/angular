import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import {
  selectAuthDisplayName,
  selectAuthEmail,
} from 'src/app/store/store.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store) {}
  displayName: any = this.store.select(selectAuthDisplayName.toString);
  ngOnInit() {
    console.log(this.store.select(selectAuthDisplayName));
    console.log(this.store.select(selectAuthEmail));
  }
}
